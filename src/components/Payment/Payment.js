import { Button, Typography } from "@material-ui/core";
import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import axios from "../../utils/axios";
import React, { useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";
import { Link, useHistory } from "react-router-dom";
import { getBasketTotal } from "../../utils/reducer";
import { useStateValue } from "../../utils/StateProvider";
import CheckoutProduct from "../Checkout/CheckoutProduct/CheckoutProduct";
import "./Payment.css";

function Payment() {
  const [{ basket, user }] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();

  const history = useHistory();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  // eslint-disable-next-line
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  console.log("The secret key : ", clientSecret);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    // eslint-disable-next-line
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        setSucceeded(true);
        setError(null);
        setProcessing(false);

        history.replace("/orders");
      });
  };

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <Typography variant="h2" className="checkout__items">
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </Typography>

        {/* Shipping Address */}

        <div className="payment__section">
          <div className="payment__title">
            <Typography variant="h5">Shipping Address</Typography>
          </div>
          <div className="payment__address">
            <Typography variant="body1">{user?.email}</Typography>
            <Typography variant="body1">123 test ave</Typography>
            <Typography variant="body1">test, ts</Typography>
          </div>
        </div>

        {/* Payment Method */}

        <div className="payment__section">
          <div className="payment__title">
            <Typography variant="h5">Payment Method</Typography>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
            </form>
          </div>
        </div>

        {/* Review Items */}

        <div className="payment__section">
          <div className="payment__title">
            <Typography variant="h5">Review items and shipping</Typography>
          </div>
          <div className="payment__items">
            {basket.map((item, i) => (
              <CheckoutProduct
                id="checkout__products"
                key={item.title + item.price + i}
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/* Place Order */}

        <div className="payment__section">
          <div className="button__filler"></div>
          <Button
            disabled={processing || disabled || succeeded}
            variant="contained"
            id="button"
          >
            <span>{processing ? <p>Processing</p> : "Place your order"}</span>
          </Button>
          <div className="payment__priceContainer">
            <CurrencyFormat
              renderText={(value) => (
                <div className="currency__output">
                  <Typography variant="h6" style={{ color: "#B12704" }}>
                    <strong>Order total: {value}</strong>
                  </Typography>
                  <Typography variant="caption">
                    By placing your order, you agree to Amazon Clone's privacy
                    notice and conditions of use.
                  </Typography>
                </div>
              )}
              decimalScale={2}
              value={getBasketTotal(basket)}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;

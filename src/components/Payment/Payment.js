import { Button, Typography } from "@material-ui/core";
import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import CurrencyFormat from "react-currency-format";
import { Link } from "react-router-dom";
import { getBasketTotal } from "../../utils/reducer";
import { useStateValue } from "../../utils/StateProvider";
import CheckoutProduct from "../Checkout/CheckoutProduct/CheckoutProduct";
import "./Payment.css";

function Payment() {
  const [{ basket, user }] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
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
            <Typography variant="h4">1 Shipping Address</Typography>
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
            <Typography variant="h4">2 Payment Method</Typography>
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
            <Typography variant="h4">3 Review items and shipping</Typography>
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
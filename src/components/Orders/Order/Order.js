import { Typography } from "@material-ui/core";
import React from "react";
import "./Order.css";
import moment from "moment";
import CheckoutProduct from "../../Checkout/CheckoutProduct/CheckoutProduct";
import CurrencyFormat from "react-currency-format";

function Order({ order }) {
  return (
    <div className="order">
      <Typography variant="h3">Order</Typography>
      <Typography>
        {moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}
      </Typography>
      <Typography id="order__id">{order.id}</Typography>
      {order.data.basket?.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <div className="currency__output">
            <Typography
              variant="h6"
              style={{ color: "#B12704", textAlign: "right" }}
            >
              <strong>Order total: {value}</strong>
            </Typography>
          </div>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Order;

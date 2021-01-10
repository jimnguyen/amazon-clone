import React from "react";
import "./Checkout.css";
import Subtotal from "../Subtotal/Subtotal";
import CheckoutProduct from "./CheckoutProduct/CheckoutProduct";
import { useStateValue } from "../../utils/StateProvider";
import checkout_top_banner from "../../assets/images/checkout_top_banner.png";
import checkout_right_banner from "../../assets/images/checkout_right_banner.jpg";
import { Typography } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";

function Checkout() {
  const [{ basket }] = useStateValue();

  let basketDisplay = null;

  if (basket.length !== 0) {
    basketDisplay = basket.map((item, i) => (
      <CheckoutProduct
        key={item.title + item.price + i}
        title={item.title}
        price={item.price}
        imageUrl={item.imageUrl}
        rating={item.rating}
      />
    ));
  } else {
    basketDisplay = (
      <Typography variant="h3" style={{ margin: "1em" }}>
        Your Amazon Cart is empty.
      </Typography>
    );
  }

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src={checkout_top_banner} alt="" />
        <div>
          <Typography variant="h4">
            Shopping Cart <ShoppingCartOutlined />
          </Typography>
          <hr style={{ margin: "10px" }} />
          {basketDisplay}
          {/* <CheckoutProduct
            key="1"
            title="Testing"
            price={55.0}
            imageUrl="../../assets/images/login_logo.png"
            rating={5}
          /> */}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
        <img
          src={checkout_right_banner}
          alt=""
          className="checkout_right_banner"
        />
      </div>
    </div>
  );
}

export default Checkout;

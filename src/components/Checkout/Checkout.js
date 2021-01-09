import React from "react";
import "./Checkout.css";

import Subtotal from "../Subtotal/Subtotal";
import CheckoutProduct from "./CheckoutProduct/CheckoutProduct";
import { useStateValue } from "../../utils/StateProvider";
import { getName } from "../../utils/utils";
import checkout_top_banner from "../../assets/images/checkout_top_banner.png";
import checkout_right_banner from "../../assets/images/checkout_right_banner.jpg";

function Checkout() {
  const [{ basket, user }] = useStateValue();

  let name = null;
  if (user) name = getName(user);

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src={checkout_top_banner} alt="" />
        <div>
          <h3>Hello {name}!</h3>
          <h2 className="checkout__title">Your items</h2>
          {basket.map((item, i) => (
            <CheckoutProduct
              key={item.title + item.price + i}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              rating={item.rating}
            />
          ))}
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

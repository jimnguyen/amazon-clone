import React from "react";
import "./Checkout.css";

import Subtotal from "../Subtotal/Subtotal";

const imageUrl =
  "https://cdn.pixabay.com/photo/2017/04/11/15/55/animals-2222007_960_720.jpg";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src={imageUrl} alt="" />
        <div>
          <h2 className="checkout__title">Your shopping basket</h2>
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;

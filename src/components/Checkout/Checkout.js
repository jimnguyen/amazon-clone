import React from "react";
import "./Checkout.css";

import Subtotal from "../Subtotal/Subtotal";
import CheckoutProduct from "./CheckoutProduct/CheckoutProduct";
import { useStateValue } from "../../utils/StateProvider";

const imageUrl =
  "https://cdn.pixabay.com/photo/2017/04/11/15/55/animals-2222007_960_720.jpg";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src={imageUrl} alt="" />
        <div>
          <h2 className="checkout__title">Your items</h2>
          {basket.map((item) => (
            <CheckoutProduct
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
      </div>
    </div>
  );
}

export default Checkout;

import React from "react";
import "./Checkout.css";

import Subtotal from "../Subtotal/Subtotal";
import CheckoutProduct from "./CheckoutProduct/CheckoutProduct";
import { useStateValue } from "../../utils/StateProvider";
import { getName } from "../../utils/utils";

const imageUrl =
  "https://m.media-amazon.com/images/G/01/DeveloperBlogs/AlexaBlogs/default/Stark_announce_blog_banner._CB475686090_.png";
const burgerKingUrl =
  "https://image.freepik.com/free-photo/fresh-juicy-beef-hamburger-placed-creative-beige-background-with-copy-space-isometric-vertical-orientation_118631-3312.jpg";

//https://miro.medium.com/max/360/1*ibN0ptxrg6LkZ5DZbKv2YA.png

function Checkout() {
  const [{ basket, user }] = useStateValue();

  let name = null;
  if (user) name = getName(user);

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src={imageUrl} alt="" />
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
        <img src={burgerKingUrl} alt="" className="burgerking" />
      </div>
    </div>
  );
}

export default Checkout;

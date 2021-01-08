import { Button } from "@material-ui/core";
import { Star } from "@material-ui/icons";
import React from "react";
import { useStateValue } from "../../../utils/StateProvider";
import "./CheckoutProduct.css";

const REMOVE_FROM_BASKET = "REMOVE_FROM_BASKET";

function CheckoutProduct({ title, price, imageUrl, rating }) {
  const [, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: REMOVE_FROM_BASKET,
    });
  };

  return (
    <div className="checkoutProduct">
      <img src={imageUrl} alt="" className="checkoutProduct__image" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>
                <Star />
              </p>
            ))}
        </div>
        <Button
          id="checkoutProduct__button"
          size="small"
          onClick={removeFromBasket}
        >
          Remove from basket
        </Button>
      </div>
    </div>
  );
}

export default CheckoutProduct;

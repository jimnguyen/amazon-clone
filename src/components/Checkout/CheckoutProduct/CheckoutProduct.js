import { Button, Typography } from "@material-ui/core";
import { StarRounded } from "@material-ui/icons";
import React from "react";
import { useStateValue } from "../../../utils/StateProvider";
import "./CheckoutProduct.css";
import prime_icon from "../../../assets/images/prime_icon.png";

const REMOVE_FROM_BASKET = "REMOVE_FROM_BASKET";

function CheckoutProduct({ title, price, image, rating, hideButton }) {
  const [, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: REMOVE_FROM_BASKET,
    });
  };

  return (
    <div className="checkoutProduct">
      <img src={image} alt="" className="checkoutProduct__image" />

      <div className="checkoutProduct__info">
        <Typography variant="h6">{title}</Typography>
        <Typography variant="h5" display="inline" style={{ color: "#B12704" }}>
          ${price}
          <img className="prime__iconCheckout" src={prime_icon} alt="" />
        </Typography>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>
                <StarRounded />
              </p>
            ))}
        </div>
        {!hideButton && (
          <Button
            id="checkoutProduct__button"
            size="small"
            onClick={removeFromBasket}
          >
            Remove from basket
          </Button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;

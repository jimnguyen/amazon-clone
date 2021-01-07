import { Button, Typography } from "@material-ui/core";
import { Star } from "@material-ui/icons";
import React from "react";
import { useStateValue } from "../../utils/StateProvider";
import "./Product.css";

const ADD_TO_BASKET = "ADD_TO_BASKET";

function Product({ title, imageUrl, price, rating }) {
  const [, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: ADD_TO_BASKET,
      item: {
        title: title,
        imageUrl: imageUrl,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <Typography>{title}</Typography>
        <Typography className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </Typography>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>
                <Star />
              </p>
            ))}
        </div>
        <img src={imageUrl} alt="" />
        <Button id="product__button" onClick={addToBasket}>
          Add to basket
        </Button>
      </div>
    </div>
  );
}

export default Product;

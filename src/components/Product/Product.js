import { Button, Typography } from "@material-ui/core";
import { StarRounded } from "@material-ui/icons";
import React from "react";
import { useStateValue } from "../../utils/StateProvider";
import "./Product.css";
import prime_icon from "../../assets/images/prime_icon.png";

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
        <Typography variant="h6">{title}</Typography>
        <Typography variant="h5" display="inline" style={{ color: "#B12704" }}>
          ${price}
          <img src={prime_icon} alt="" className="prime__icon" />
        </Typography>

        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>
                <StarRounded />
              </p>
            ))}
        </div>
        <img src={imageUrl} alt="" />
        <Button id="product__button" onClick={addToBasket}>
          Add to cart
        </Button>
      </div>
    </div>
  );
}

export default Product;

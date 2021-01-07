import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { Button } from "@material-ui/core";
import { useStateValue } from "../../utils/StateProvider";
import { getBasketTotal } from "../../utils/reducer";

function Subtotal() {
  const [{ basket }] = useStateValue();

  // const getBasketTotal = (basket) => {
  //   let totalPrice = 0;

  //   basket.forEach((item) => {
  //     return (totalPrice += item.price);
  //   });

  //   return totalPrice;
  // };

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        fixedDecimalScale={true}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <Button id="subtotal__button">Proceed to checkout</Button>
    </div>
  );
}

export default Subtotal;

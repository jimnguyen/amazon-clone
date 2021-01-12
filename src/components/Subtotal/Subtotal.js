import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { Button, Checkbox, Typography } from "@material-ui/core";
import { useStateValue } from "../../utils/StateProvider";
import { getBasketTotal } from "../../utils/reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const history = useHistory();
  const [{ basket }] = useStateValue();

  let disabled = true;
  if (basket.length > 0) disabled = false;

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <Typography>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </Typography>
            <Typography variant="subtitle2" className="subtotal__gift">
              <Checkbox size="small" color="primary" />
              This order contains a gift
            </Typography>
          </>
        )}
        decimalScale={2}
        fixedDecimalScale={true}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <Button
        id="subtotal__button"
        onClick={(e) => history.push("/payment")}
        disabled={disabled}
      >
        Proceed to checkout
      </Button>
    </div>
  );
}

export default Subtotal;

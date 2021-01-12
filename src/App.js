import React, { useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import Payment from "./components/Payment/Payment";
import Orders from "./components/Orders/Orders";
import { auth } from "./utils/firebase";
import { useStateValue } from "./utils/StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const SET_USER = "SET_USER";

const promise = loadStripe(
  "pk_test_51I8u9nHxXphBSaem4snnoNtsE0oBJ1Ixz3tFNeFr1aAzxKFTab4blJ0oTPOJLrpX00DXPlGMV5Om6OEfEfVURBDT00VGPTIEK0"
);

function App() {
  const [, dispatch] = useStateValue();

  const setUserAuth = useRef(() => {});

  setUserAuth.current = () => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({ type: SET_USER, user: authUser });
      } else {
        dispatch({ type: SET_USER, user: null });
      }
    });
  };

  useEffect(() => {
    setUserAuth.current();
  }, []);

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

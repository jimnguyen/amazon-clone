import React, { useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import { auth } from "./utils/firebase";
import { useStateValue } from "./utils/StateProvider";

const SET_USER = "SET_USER";

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

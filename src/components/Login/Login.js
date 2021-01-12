import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../utils/firebase";
import "./Login.css";
import login_logo from "../../assets/images/login_logo.png";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((err) => alert(err.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img src={login_logo} alt="" className="login__logo" />
      </Link>
      <div className="login__container">
        <h1>Sign-In</h1>

        <form>
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button id="login__signInButton" onClick={signIn} type="submit">
            Sign-In
          </Button>
        </form>

        <p>
          By continuing, you agree to Amazon Clone's Conditions of Use and
          Privacy Notice.
        </p>

        <p className="login__p">New to Amazon?</p>
        <Button id="login__registerButton" onClick={register}>
          Create your Amazon account
        </Button>
      </div>
    </div>
  );
}

export default Login;

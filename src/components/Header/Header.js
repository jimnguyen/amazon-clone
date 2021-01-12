import React from "react";
import "./Header.css";
import { Search, ShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useStateValue } from "../../utils/StateProvider";
import { auth } from "../../utils/firebase";
import { getName } from "../../utils/utils";
import header_logo from "../../assets/images/header_logo.png";

function Header() {
  const [{ basket, user }] = useStateValue();

  let name = null;
  if (user) name = getName(user);

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" alt="amazon logo" src={header_logo} />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <Search className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to="/login" style={{ textDecoration: "none" }}>
          <div className="header__option" onClick={handleAuthentication}>
            <span className="header__optionLineOne">
              Hello, {user ? name : "Guest"}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
      </div>

      <Link to="/checkout" style={{ textDecoration: "none" }}>
        <div className="header__optionBasket">
          <ShoppingCart />
          <span className="header__optionLineTwo header__basketCount">
            {basket?.length}
          </span>
        </div>
      </Link>
    </div>
  );
}

export default Header;

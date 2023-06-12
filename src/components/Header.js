import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";

const Header = () => {
  const [{ basket, user }] = useStateValue();

  const capitalizeUsername = (user) => {
    const newUser = user?.email;
    const userName = newUser?.substr(0, newUser?.indexOf("@"));
    const capitalLetter = userName?.charAt(0).toUpperCase();
    const remainingLetters = userName?.slice(1);
    return capitalLetter + remainingLetters;
  };

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="AMAZON"
        />
      </Link>

      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div className="header_option" onClick={handleAuthentication}>
            <span className="option_lineOne">
              {user ? `Hello ${capitalizeUsername(user)}` : "Hello Guest"}
            </span>
            <span className="option_lineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header_option">
            <span className="option_lineOne">Returns</span>
            <span className="option_lineTwo">& Orders</span>
          </div>
        </Link>
        <div className="header_option">
          <span className="option_lineOne">Your</span>
          <span className="option_lineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon className="header_shopIcon" />
            <span className="option_lineTwo header_basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;

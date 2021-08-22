import React from "react";
import { Link } from "react-router-dom";
//  import SVGs directly as React component.
import { ReactComponent as Logo } from "../../assets/crown.svg";
// This is handy if you don't want to load SVG as a separate file.
//  Don't forget the curly braces in the import!
// The ReactComponent import name is significant and tells Create React App
//  that you want a React component that renders an SVG, rather than its filename.
import "./header.style.scss";

import { auth } from "../../firebase/firebase-utils";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link to="/" className="header__logo-container">
      <Logo className="header__logo" />
    </Link>

    <div className="header__options">
      <Link to="/shop" className="header__option">
        SHOP
      </Link>
      <Link to="/" className="header__option">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="header__option" onClick={() => auth.signOut()}>
          SIGN-OUT
        </div>
      ) : (
        <Link to="/login" className="header__option">
          SIGN-IN
        </Link>
      )}
    </div>
  </div>
);

export default Header;
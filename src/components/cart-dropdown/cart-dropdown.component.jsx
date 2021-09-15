import React from "react";

import "./cart-dropdown.style.scss";

import CustomButton from "../custom-button/custom-button.component";

const CartDropDown = () => (
  <div className="cart-dropdown">
    <div className="cart-dropdown__items"></div>
    <div className="cart-dropdown__checkout-button">
      <CustomButton
        type="button"
        label="GO TO CHECKOUT"
        classname="btn btn--black"
      />
    </div>
  </div>
);

export default CartDropDown;

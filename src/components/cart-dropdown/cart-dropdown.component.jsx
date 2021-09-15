import React from "react";
import { connect } from "react-redux";

import "./cart-dropdown.style.scss";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

const CartDropDown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-dropdown__items">
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
    <div className="cart-dropdown__checkout-button">
      <CustomButton
        type="button"
        label="GO TO CHECKOUT"
        classname="btn btn--black"
      />
    </div>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartDropDown);

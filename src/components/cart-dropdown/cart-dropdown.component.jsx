import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

// style
import "./cart-dropdown.style.scss";

// Components
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

// selectors
import { selectCartItems } from "../../redux/cart/cart.selectors";

// action
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartDropDown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-dropdown__items">
      {cartItems.length ? (
        cartItems.map((item) => <CartItem key={item.id} item={item} />)
      ) : (
        <span className="cart-dropdown__empty-message">Your cart is empty</span>
      )}
    </div>
    <div className="cart-dropdown__checkout-button">
      <CustomButton
        type="button"
        label="GO TO CHECKOUT"
        classname="btn btn--black"
        handleClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      />
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default compose(withRouter, connect(mapStateToProps))(CartDropDown);

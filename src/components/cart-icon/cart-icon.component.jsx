import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// styles
import "./cart-icon.style.scss";
// svg
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

// actions
import { toggleCartHidden } from "../../redux/cart/cart.actions";

// selectors
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

const CartIcon = ({ toggleCartHidden, cartItemsCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="cart-icon__icon" />
    <span className="cart-icon__span">{cartItemsCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  cartItemsCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

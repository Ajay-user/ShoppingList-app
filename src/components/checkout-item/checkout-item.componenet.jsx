import React from "react";
import { connect } from "react-redux";

// action
import {
  clearItemFromCart,
  removeItem,
  addItem,
} from "../../redux/cart/cart.actions";

// style
import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;
  return (
    <div className="checkout__item">
      <img
        src={imageUrl}
        alt="product"
        className="checkout__item--content-image checkout__row"
      />
      <div className="checkout__item--content checkout__row checkout__heading">
        {name}
      </div>
      <div className="checkout__item--content checkout__row checkout__heading">
        <span className="dingbats" onClick={() => removeItem(cartItem)}>
          &#10094;
        </span>
        {quantity}
        <span className="dingbats" onClick={() => addItem(cartItem)}>
          &#10095;
        </span>
      </div>
      <div className="checkout__item--content checkout__row checkout__heading">
        {price}
      </div>
      <div className="checkout__item--content checkout__row checkout__heading">
        <span className="dingbats" onClick={() => clearItem(cartItem)}>
          &#10006;
        </span>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  removeItem: (item) => dispatch(removeItem(item)),
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);

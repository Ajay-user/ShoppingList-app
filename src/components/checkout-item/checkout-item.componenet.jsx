import React from "react";

// style
import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem: { imageUrl, name, quantity, price } }) => (
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
      <span className="dingbats">&#10094;</span>
      {quantity}
      <span className="dingbats">&#10095;</span>
    </div>
    <div className="checkout__item--content checkout__row checkout__heading">
      {price}
    </div>
    <div className="checkout__item--content checkout__row checkout__heading">
      <span className="dingbats">&#10006;</span>
    </div>
  </div>
);

export default CheckoutItem;

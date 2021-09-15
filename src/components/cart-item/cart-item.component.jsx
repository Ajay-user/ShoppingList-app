import React from "react";

import "./cart-item.style.scss";

const CartItem = ({ item: { name, imageUrl, price, quantity } }) => (
  <div className="cart-item">
    <div className="cart-item__image">
      <img src={imageUrl} alt="product" />
    </div>
    <div className="cart-item__details">
      <span className="cart-item__span cart-item__span--name">{name}</span>
      <span className="cart-item__span cart-item__span--price">
        ${price} x {quantity}
      </span>
    </div>
  </div>
);

export default CartItem;

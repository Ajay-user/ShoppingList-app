import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// style
import "./checkout.style.scss";

// component
import CheckoutItem from "../../components/checkout-item/checkout-item.componenet";

// selector
import {
  selectCartItems,
  selectCartItemsTotal,
} from "../../redux/cart/cart.selectors";

const CheckoutPage = ({ cartItems, cartTotal }) => {
  const columns = ["product", "description", "quantity", "price", "remove"];
  return (
    <div className="checkout">
      <div className="checkout__header">
        {columns.map((col_name) => (
          <div className="checkout__heading checkout__row">{col_name}</div>
        ))}
      </div>

      <div className="checkout__body">
        {cartItems.map((item) => (
          <CheckoutItem cartItem={item} />
        ))}
      </div>

      <div className="checkout__footer">
        <div className="checkout__total">
          <h1>Total Amount : ${cartTotal}</h1>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartItemsTotal,
});

export default connect(mapStateToProps)(CheckoutPage);

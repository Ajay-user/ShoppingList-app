import React from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";
import { addItem } from "../../redux/cart/cart.actions";

import "./collection-item.style.scss";

const CollectionItem = ({ item, addItem }) => {
  const { name, imageUrl, price } = item;
  return (
    <div className="collection-item">
      <div
        className="collection-item__background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="collection-item__footer">
        <span className="collection-item__title">{name}</span>
        <span className="collection-item__price">${price}</span>
      </div>

      <div className="collection-item__button">
        <CustomButton
          type="button"
          classname="btn btn--white"
          label="ADD TO CART"
          handleClick={() => addItem(item)}
        />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);

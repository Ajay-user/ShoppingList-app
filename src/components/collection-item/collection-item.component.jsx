import React from "react";

import "./collection-item.style.scss";

const CollectionItem = ({ name, imageUrl, price }) => (
  <div className="collection-item">
    <div
      className="collection-item__background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="collection-item__footer">
      <span className="collection-item__title">{name}</span>
      <span className="collection-item__price">${price}</span>
    </div>
  </div>
);

export default CollectionItem;

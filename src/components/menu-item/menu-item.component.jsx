import React from "react";
import { withRouter } from "react-router-dom";

import "./menu-item.style.scss";
const MenuItem = ({ id, title, imageUrl, linkUrl, size, history, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => {
      history.push(`${match.url}${linkUrl}`);
    }}
  >
    <div
      className="menu-item__background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></div>
    <div className="menu-item__content">
      <h1 className="menu-item__title">{title.toUpperCase()}</h1>
      <span className="menu-item__subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);

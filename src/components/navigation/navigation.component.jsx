import React from "react";

import "./navigation.scss";

const Navigation = () => (
  <div className="navigation">
    <input
      type="checkbox"
      className="navigation__checkbox"
      id="navigation__toggle"
    ></input>
    <label htmlFor="navigation__toggle" className="navigation__label">
      <span className="navigation__icon"></span>
    </label>
    <div className="navigation__background"></div>
  </div>
);

export default Navigation;

import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ type, handleClick, label, classname }) => (
  <div className="custom-button">
    <button type={type} onClick={handleClick} className={classname}>
      {label}
    </button>
  </div>
);

export default CustomButton;

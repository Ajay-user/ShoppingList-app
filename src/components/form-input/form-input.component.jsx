import React from "react";

import "./form-input.style.scss";

const FormInput = ({ id, handleChange, label, ...otherpros }) => (
  <div className="form-input">
    <div className="input-group">
      <input
        className="input-group__input"
        id={`input-group__input${id}`}
        onChange={handleChange}
        required
        {...otherpros}
      ></input>
      <label htmlFor={`input-group__input${id}`} className="input-group__label">
        {label}
      </label>
    </div>
  </div>
);

export default FormInput;

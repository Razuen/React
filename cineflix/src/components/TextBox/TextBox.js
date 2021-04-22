import React from "react";
import "./TextBox.scss";

function TextBox(props) {
  return (
    <input
      onChange={(e) => {
        props.onChange(e.target.value);
      }}
      placeholder={props.placeholder}
      value={props.value}
      type={props.type}
      minLength={props.min}
      maxLength={props.max}
    />
  );
}

export default TextBox;

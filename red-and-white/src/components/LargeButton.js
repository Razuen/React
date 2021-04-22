import React from "react";

function LargeButton(props) {
  return (
    <div className="large-btn-wrapper">
      <button
        disabled={props.disabled}
        className={"large " + props.className}
        onClick={props.onClick}
      >
        {props.text}
      </button>
      <style>
        {`
        .large-btn-wrapper{
          text-align: center;
        }`}
      </style>
    </div>
  );
}

export default LargeButton;

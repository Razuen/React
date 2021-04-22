import React from "react";

function Button(props) {
  console.log("Button");

  return (
    <button
      className={props.className}
      onClick={props.id ? () => props.onClick(props.id) : props.onClick}
    >
      {props.text}
      <style jsx>
        {`
          button {
            padding: 10px;
            width: 100%;
          }
          button.small {
            padding: 5px;
            width: auto;
            margin: 0 5px;
          }
        `}
      </style>
    </button>
  );
}

export default Button;

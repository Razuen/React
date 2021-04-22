import React from "react";

const TextInput = React.forwardRef((props, ref) => {
  console.log("Input element");
  return (
    <div className="input-wrapper">
      <input
        type="text"
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        onChange={(event) => {
          props.onChange(event.target.value);
        }}
        onKeyDown={(event) => {
          props.onKeyDown(event);
        }}
        ref={ref}
      />
      <style jsx>
        {`
          .input-wrapper {
            margin: 20px 0;
            width: 70%;
          }
          input {
            padding: 10px;
            border: none;
          }
        `}
      </style>
    </div>
  );
});

export default TextInput;

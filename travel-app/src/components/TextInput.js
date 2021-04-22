import React from "react";

function TextInput(props) {
  return (
    <React.Fragment>
      <label> {props.label} </label>
      <input
        type="text"
        name={props.name}
        value={props.value}
        onChange={(event) => {
          props.onChange(event.target.value);
        }}
      />
    </React.Fragment>
  );
}

export default TextInput;

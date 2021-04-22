import React from "react";

function Select(props) {
  console.log("Select Box");

  return (
    <div className="select-wrapper">
      <label> {props.label} </label>
      <select
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
      >
        {props.options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <style jsx>
        {`
          .select-wrapper {
            margin: 20px 0;
          }
          label {
            margin: 10px 0;
          }
        `}
      </style>
    </div>
  );
}

export default Select;

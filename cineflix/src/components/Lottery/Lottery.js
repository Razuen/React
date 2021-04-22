import React from "react";
import TextBox from "../TextBox/TextBox";
import "./Lottery.scss";
import Button from "../Button/Button";

function Lottery(props) {
  return (
    <div className="lottery">
      <h2>Your Mobile Number can win you exciting prizes.</h2>
      <TextBox
        type="text"
        value={props.value}
        placeholder="Enter Mobile Number"
        onChange={props.onChange}
        min={10}
        max={10}
      />
      <Button
        text="I'm Feeling Lucky"
        color="violet"
        onClick={() => {
          props.onClick();
        }}
      />
    </div>
  );
}

export default Lottery;

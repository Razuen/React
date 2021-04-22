import React from "react";
import Button from "../Button/Button";

function ButtonGroup(props) {
  console.log("Button Group", props.buttonList);

  return (
    <div className="btn-group">
      {props.buttonList.map((button) => {
        return (
          <Button
            key={button.id}
            className="small"
            id={button.id}
            onClick={(id) => props.onClick(id)}
            text={button.text}
          />
        );
      })}
    </div>
  );
}

export default ButtonGroup;

import React from "react";

function DiscountDisplayer(props) {
  console.log("Discount Displayer");
  return (
    <div className="discount-displayer">
      <div className="text"> {props.text}</div>
      <h3 className="cost">{props.cost} </h3>
      <style jsx>
        {`
          .discount-displayer {
            display: flex;
            flex-direction: column;
          }
        `}
      </style>
    </div>
  );
}

export default DiscountDisplayer;

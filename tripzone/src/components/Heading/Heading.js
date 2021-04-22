import React from "react";
import Button from "../Button/Button";
import Prime from "../prime/Prime";

function Heading(props) {
  //console.log("Heading");

  return (
    <h1 className="heading">
      {props.text}
      {props.showButton && (
        <Button
          className="small"
          text={props.buttonText}
          onClick={() => props.onButtonClick()}
        />
      )}
      {props.isPrime && <Prime />}
      <style jsx>{`
        .heading {
          margin: 15px 0;
          display: flex;
          justify-content: space-between;
        }
        .heading h1 {
          line-height: 2rem;
        }
      `}</style>
    </h1>
  );
}

export default Heading;

import React from "react";
import GlobalStyles from "../../constants/GlobalStyles";

function Chip(props) {
  console.log("Chip :::", props.heading);

  return (
    <div className="chip">
      <span className="heading"> {props.heading} </span>
      <span className=""> {props.text} </span>
      <style jsx>
        {`
          .chip {
            display: flex;
            flex-direction: column;
            align-items: center;
            background: ${GlobalStyles.DARK_PINK};
            padding: 20px;
            margin: 0 5px;
          }
          .heading {
            font-size: 0.9rem;
          }
        `}
      </style>
    </div>
  );
}

export default Chip;

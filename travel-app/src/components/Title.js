import React from "react";
import { globalStyles } from "../constants/globalStyles";

function Title(props) {
  return (
    <h2 className={"heading " + props.alignment}>
      {props.text}
      <style>
        {`
          .heading{
            color: ${globalStyles.THEME_PURPLE};
            text-align:center;
            margin: 3% 0;
          }
          .heading.alignLeft {
            text-align:left;
          }
          .heading.alignRight {
            text-align:right;
          }
        
          `}
      </style>
    </h2>
  );
}

export default Title;

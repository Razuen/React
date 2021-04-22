import React from "react";
import { globalStyles } from "../constants/globalStyles";

const Banner = (props) => {
  return (
    <h1 className="banner">
      Learn
      <br />
      Why Travelling is Important?
      <style>
        {`
        .banner{
            padding: 2% 7.5%;
            width: 100%;
            background: ${globalStyles.THEME_PURPLE};
            color: ${globalStyles.THEME_WHITE};
        }
          `}
      </style>
    </h1>
  );
};

export default Banner;

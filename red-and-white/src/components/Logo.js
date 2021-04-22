import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <React.Fragment>
      <Link to="/shop">
        <img src={require("../assets/images/logo.png")} alt="logo" />
        <style>
          {`
         img{
          width: 100%
        }
        `}
        </style>
      </Link>
    </React.Fragment>
  );
};

export default Logo;

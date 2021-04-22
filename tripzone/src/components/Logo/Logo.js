import React from "react";
import { withRouter } from "react-router-dom";

function Logo({ history }) {
  console.log("Logo");

  return (
    <div
      className="logo"
      onClick={() => {
        history.push("/");
      }}
    >
      <img src={require("../../assets/images/logo.png")} alt="logo" />
      <style>
        {`
          .logo {
              width: 175px;
              height: fit-content;
              cursor: pointer;
          }
          `}
      </style>
    </div>
  );
}

export default React.memo(withRouter(Logo));

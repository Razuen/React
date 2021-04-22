import React from "react";
import NavBar from "./NavBar";
import CartList from "./CartList";
import globalStyles from "../constants/globalStyles";

function PageTemplate(props) {
  return (
    <React.Fragment>
      {props.showNav && <NavBar />}
      <div className="wrapper">{props.children}</div>
      {props.showCart && <CartList />}
      <style>
        {`
          .wrapper{
            width: 70%;
            background: ${globalStyles.THEME_GREY};
            float:left;
            padding-right: 30px;

          }
          `}
      </style>
    </React.Fragment>
  );
}

export default PageTemplate;

import React from "react";
import Logo from "./Logo";
import globalStyles from "../constants/globalStyles";

function Header() {
  return (
    <header>
      <div className="logo">
        <Logo />
      </div>
      <style>
        {`
                header{
                    background: ${globalStyles.THEME_RED};
                    padding: 30px 0;
                }
                .logo{
                    width: 7%;
                    margin: 0 auto;
                }
                `}
      </style>
    </header>
  );
}

export default Header;

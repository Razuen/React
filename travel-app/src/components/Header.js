import React from "react";
import { globalStyles } from "../constants/globalStyles";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={props.className}>
      <Link to="/">
        <h3 className="header-text">{props.text}</h3>
      </Link>
      <div className="header-right-component">{props.children}</div>
      <style>
        {`
        header{
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          height: 75px;
          align-items: center;
          background: ${globalStyles.THEME_PURPLE};
          padding: 0 7.5%;
        }

        header.contrast {
          background: ${globalStyles.THEME_WHITE}
        }

        .header-text {
          color: ${globalStyles.THEME_WHITE};
          text-transform: uppercase;
          font-weight: 600;
        }
        
        header.contrast .header-text{
          color: ${globalStyles.THEME_PURPLE};
        }
        `}
      </style>
    </header>
  );
};

export default Header;

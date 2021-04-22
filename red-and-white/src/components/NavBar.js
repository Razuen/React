import React, { useState, useEffect } from "react";
import { NavLink, withRouter, Link } from "react-router-dom";
import { Constants } from "../constants/Constant";
import globalStyles from "../constants/globalStyles";
import Logo from "./Logo";

const NavBar = (props) => {
  const [router, setrouter] = useState(props.match.params.categoryId);

  useEffect(() => {
    setrouter(props.match.params.categoryId);
  }, [props.match.params]);

  return (
    <nav>
      <div className="logo-wrapper">
        <Logo />
      </div>
      <div className="links">
        <ul className="sections">
          {Constants.navList.sections.map((section, i) => {
            return (
              <li
                key={i}
                className={
                  router
                    ? router === section.category && "active"
                    : section.category === "men" && "active"
                }
              >
                <Link to={section.link}> {section.category} </Link>
              </li>
            );
          })}
        </ul>
        <ul className="pages">
          {Constants.navList.pages.map((page, i) => {
            return (
              <li key={i}>
                <NavLink to={page.link} activeClassName="active">
                  {page.page}
                </NavLink>
              </li>
            );
          })}
        </ul>

        <style>
          {`
          
      nav{
        width: ${globalStyles.navBar};
        height: 100vh;
        position: fixed;
        background: ${globalStyles.THEME_RED};
        color: ${globalStyles.THEME_WHITE};
      }
      .logo-wrapper {
        padding: 30px;
      }
      nav .links{
        height: 80vh;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
      }
      nav ul{
          list-style:none;
      }
      nav ul li{
          padding: 10px 25px;
          margin-bottom: 10px;
        text-transform: uppercase;
        cursor: pointer;

      }
      nav ul li:last-child{
        margin-bottom: 0;
      }
      li.active {
        background: ${globalStyles.THEME_DARK_RED};
      }
      
      `}
        </style>
      </div>
    </nav>
  );
};

export default withRouter(NavBar);

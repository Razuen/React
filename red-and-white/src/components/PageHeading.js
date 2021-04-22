import React from "react";
import { Constants } from "../constants/Constant";
import globalStyles from "../constants/globalStyles";

const PageHeading = (props) => {
  return (
    <div className="page-heading">
      <h1>{props.heading}</h1>
      <span className="user-details">
        <span id={Constants.user.id}>Hi {Constants.user.name} </span>
        <div className="user-img">
          <img src={require("../assets/images/person.jpeg")} alt="person" />
        </div>
      </span>
      <style>
        {`
      .page-heading {
         display: flex;
         justify-content: space-between;
         padding: 0 10px 30px;
      }
      .page-heading h1{
        text-transform: uppercase;    
      }
      .user-details{
        display: flex;
        align-items: center;
      }
      .user-img{
        width: 30px;
        height: 30px;
        margin-left: 10px;
        border-radius: 50%;
        padding: 5px;
        background: ${globalStyles.THEME_WHITE};
      }
      .user-img img{
        width: 100%;
        height: 100%;
      }
   
      `}
      </style>
    </div>
  );
};

export default PageHeading;

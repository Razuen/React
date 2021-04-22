import React from "react";
import globalStyles from "../constants/globalStyles";

function FeatureCard(props) {
  return (
    <div className="feature">
      <div className="feature-img"></div>
      <h2 className="feature-name"> {props.feature.title} </h2>
      <p className="feature-desc"> {props.feature.desc} </p>
      <style>
        {`
                .feature{
                    padding: 20px;
                    background: ${globalStyles.THEME_WHITE};
                    flex-basis: calc(25% - 20px);
                    border-radius: 5px;
                    text-align: center;

                }
                .feature-img{
                    width: 150px;
                    height: 150px;
                    margin-bottom: 10px;
                }
                .feature-name {
                    margin-bottom: 10px;
                }
                `}
      </style>
    </div>
  );
}

export default FeatureCard;

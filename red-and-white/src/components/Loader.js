import React from "react";
import globalStyles from "../constants/globalStyles";

function Loader() {
  return (
    <div className="loader-wrapper">
      <div className="loader">
        <style>
          {`
          .loader-wrapper{
              height: 100vh;
              display: flex;
              align-items: center;
          }
        .loader {
            text-align: center;
            border: 10px solid ${globalStyles.THEME_WHITE} ;
            border-radius: 50%;
            border-top: 10px solid ${globalStyles.THEME_RED};
            width: 100px;
            height: 100px;
            margin: 0 auto;
            animation: spin 2s linear infinite;
            }                  
            @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
            }
                `}
        </style>
      </div>
    </div>
  );
}

export default Loader;

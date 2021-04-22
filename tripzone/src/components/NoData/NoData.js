import React from "react";
import GlobalStyles from "../../constants/GlobalStyles";

function NoData({ text }) {
  return (
    <div className="no-data">
      {text}
      <style jsx>
        {`
          .no-data {
            height: 120px;
            background: inherit;
            color: ${GlobalStyles.DARK_PINK};
            font-style: italic;
            font-size: 1.2rem;
          }
        `}
      </style>
    </div>
  );
}

export default NoData;

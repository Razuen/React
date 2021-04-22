import React from "react";
import { Link } from "react-router-dom";
import globalStyles from "../constants/globalStyles";

function Error() {
  return (
    <div>
      <h1>
        Sorry this page is not available <br />
        Go to <Link to="/shop">Shopping Page</Link>
      </h1>
      <style>
        {`
          a {
              color: ${globalStyles.THEME_RED};
          }`}
      </style>
    </div>
  );
}

export default Error;

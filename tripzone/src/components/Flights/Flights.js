import React, { useCallback } from "react";
import GlobalStyles from "../../constants/GlobalStyles";
import { useFullCityName } from "../../customHooks/useFullCityName";
import Button from "../Button/Button";

function Flights({ data, onClick }) {
  console.log("Flights");

  return (
    <div className="flights">
      <div className="img-wrapper">
        <img src={require("../../assets/images/air-india.png")} alt="flight" />
      </div>
      <div>
        <div className="flight-name">Air India -{data.date} </div>
        <span>{useFullCityName(data.source)}</span> -{" "}
        <span>{useFullCityName(data.dest)}</span>
        <h4>${data.price}</h4>
      </div>

      <Button
        text="BOOK"
        onClick={useCallback(() => {
          onClick(data);
        }, [data])}
        className="small"
      />

      <style jsx>
        {`
          .flights {
            display: flex;
            padding: 5px;
            background: ${GlobalStyles.WHITE};
            margin-bottom: 10px;
            align-items: center;
            justify-content: space-between;
          }
          .img-wrapper {
            width: 75px;
            height: 75px;
          }
          .flight-name {
            font-size: 1.2rem;
          }
        `}
      </style>
    </div>
  );
}

export default Flights;

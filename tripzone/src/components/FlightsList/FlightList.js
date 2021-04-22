import React from "react";
import Flights from "../Flights/Flights";

function FlightList({ dataList, onClick }) {
  console.log("Flight List");

  return (
    <div className="flights-wrapper">
      {dataList &&
        dataList.map((data, i) => (
          <Flights data={data} onClick={(data) => onClick(data)} key={i} />
        ))}
    </div>
  );
}

export default FlightList;

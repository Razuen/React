import React from "react";
import Card from "../Card/Card";

function CardList({ dataList }) {
  console.log("Card List");

  return (
    <div className="card-wrapper">
      {dataList.map((data, i) => (
        <Card data={data} key={i} />
      ))}
      <style jsx>
        {`
          .card-wrapper {
            display: flex;
            flex-wrap: wrap;
          }
        `}
      </style>
    </div>
  );
}

export default CardList;

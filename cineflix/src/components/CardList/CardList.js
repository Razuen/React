import React from "react";
import Card from "../Card/Card";
import "./CardList.scss";

function CardList({ dataList }) {
  return (
    <div className="card-list">
      {dataList && dataList.map((data, i) => <Card data={data} key={i} />)}
    </div>
  );
}

export default CardList;

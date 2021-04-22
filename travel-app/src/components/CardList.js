import React from "react";
import Card from "./Card";

function CardList(props) {
  return (
    <div className="card-wrapper">
      {props.dataList &&
        props.dataList.map((data) => {
          return (
            <Card
              locationData={data}
              key={data.id}
              onClick={(value) => {
                props.onClick(value);
              }}
            />
          );
        })}
    </div>
  );
}

export default CardList;

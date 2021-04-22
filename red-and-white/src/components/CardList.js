import React from "react";
import Card from "./Card";

function CardList(props) {
  return (
    <div className="card-wrapper">
      {props.dataList &&
        props.dataList.map((data) => {
          return (
            <Card
              key={data.id}
              data={data}
              addToWishList={(id) => {
                props.addToWishList(id);
              }}
              onClick={(id) => {
                props.onClick(id);
              }}
            />
          );
        })}
      <style>
        {`.card-wrapper {
            display: flex;
            flex-wrap: wrap;
            }
            
        `}
      </style>
    </div>
  );
}

export default CardList;

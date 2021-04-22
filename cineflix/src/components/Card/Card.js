import React from "react";
import "./Card.scss";
function Card({ data }) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={data.posterurl} alt="poster" />
      </div>
      <div className="title"> {data.storyline} </div>
      <div className="additional-info">
        <div className="visits">{data.visits}</div>
        <div className="likes">{data.likes}</div>
      </div>
    </div>
  );
}

export default Card;

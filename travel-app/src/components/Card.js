import React from "react";
import Button from "./Button";

const Card = (props) => {
  return (
    <div className="card-wrapper">
      <div className="card-img">
        <img
          src={require("../assets/images/" + props.locationData.image)}
          alt={props.locationData.location}
        />
      </div>
      <h3 className="place-desc">{props.locationData.title} </h3>
      <h6 className="place"> {props.locationData.location} </h6>
      <p className="place-details"> {props.locationData.description} </p>
      <Button
        className="primary"
        text=" Read more"
        onClick={() => {
          props.onClick(props.locationData.id);
        }}
      />

      <style>
        {`
        .card-wrapper {
          flex-basis: calc(33.33% - 55px);
          margin-bottom: 60px;
        }
        .card-img {
          width: 100%
        }
        .card-img img {
          width: 100%;
        }
        .card-wrapper .place-details {
          text-align: left;
          margin-bottom: 20px
        }
        .place-desc{
          font-weight: 400;
          margin: 10px 0;         
        }
        h6.place{
          font-weight: 700;
          margin-bottom: 13px;
        }

        `}
      </style>
    </div>
  );
};

export default Card;

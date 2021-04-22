import React from "react";
import { Constants } from "../constants/Constant";
import style from "../css/Card.module.css";
import Button from "./Button";

function Card(props) {
  return (
    <div className={style.card}>
      <div className={style.cardImg}>
        <img src={props.data.image} alt="product" />
      </div>
      <p className={style.productName}>{props.data.name}</p>
      <div className={style.priceSize}>
        <h3 className={style.price}> {props.data.price} </h3>
        <ul className={style.size}>
          {Constants.sizes.map((size, i) => {
            return <li key={i}> {size} </li>;
          })}
        </ul>
      </div>
      <div className={style.btnWrapper}>
        <Button
          className="secondary"
          text="wishlist"
          onClick={() => {
            props.addToWishList(props.data.id);
          }}
        />
        <Button
          className="primary"
          text="add to bag"
          onClick={() => props.onClick(props.data.id)}
        />
      </div>
    </div>
  );
}

export default Card;

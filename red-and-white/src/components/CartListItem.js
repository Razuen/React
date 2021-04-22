import React from "react";
import globalStyles from "../constants/globalStyles";

function CartListItem(props) {
  return (
    <div className={"cart-item " + props.className}>
      <div className="cart-img">
        <img src={props.data.image} alt="product" />
      </div>
      <div className="product-details">
        <p className="product-name">{props.data.name}</p>
        <h3 className="price"> {props.data.price} </h3>
        {props.removeItem !== false && (
          <span
            className="remove"
            onClick={() => props.removeItem(props.data.id)}
          >
            REMOVE
          </span>
        )}
      </div>
      <style jsx>
        {`
          .cart-item {
            width: 270px;
            display: flex;
            margin-bottom: 20px;
            padding: 10px;
            background: ${globalStyles.CART_BG};
            border-radius: 4px;
          }
          .cart-item.horizontal {
            margin-right: 20px;
          }
          .cart-img {
            width: 60px;
            height: 70px;
            margin-right: 15px;
          }
          .cart-img img {
            width: 100%;
            height: 100%;
          }
          .cart-item .product-details {
            flex-basis: calc(100% - 75px);
          }
          .cart-item .product-name {
            font-size: 1rem;
            height: auto;
          }
          .cart-item .price {
            font-size: 1rem;
            font-weight: 700;
          }
          .remove {
            font-size: 0.8rem;
            float: right;
            color: ${globalStyles.ERROR_RED};
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
}

export default CartListItem;

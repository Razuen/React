import React from "react";
import CartListItem from "./CartListItem";

function CartList(props) {
  return props.cartList.map((data) => {
    return (
      <CartListItem
        key={data.id}
        data={data}
        removeItem={
          props.removeItem !== false ? (id) => props.removeItem(id) : false
        }
        className={props.className}
      />
    );
  });
}

export default CartList;

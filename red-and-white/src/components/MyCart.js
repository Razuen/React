import React from "react";
import { withRouter } from "react-router-dom";
import globalStyles from "../constants/globalStyles";
import CartList from "./CartList";
import LargeButton from "./LargeButton";
import Loader from "./Loader";

function MyCart(props) {
  return (
    <div className="cart-wrapper">
      {props.isLoading ? (
        <Loader />
      ) : (
        <React.Fragment>
          <div className="heading">My Cart ({props.cartList.length})</div>

          <div className="cart-list">
            {props.cartList.length > 0 ? (
              <CartList
                cartList={props.cartList}
                removeItem={(id) => props.removeItem(id)}
              />
            ) : (
              <h2>Add Item(s) to Cart</h2>
            )}
          </div>

          <LargeButton
            disabled={props.cartList.length === 0 ? true : false}
            text="place order"
            className="primary"
            onClick={() => props.history.push("/confirmOrder")}
          />
        </React.Fragment>
      )}

      <style>
        {`
            .cart-wrapper{
              width: ${globalStyles.cart};
              position: fixed;
              top: 0;
              right: 0;
              padding: 0 35px;
              height: 100%;
              overflow-y: scroll;
            }
            .heading{
              margin: 35px 0;         
              font-size: 1.5rem;
              font-weight: 700;
              text-transform: uppercase;
              text-align: center;
            }
            .cart-list{
              min-height: 80vh;
            }
            `}
      </style>
    </div>
  );
}

export default withRouter(MyCart);

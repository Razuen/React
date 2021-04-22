import React from "react";
import CartList from "./CartList";
import globalStyles from "../constants/globalStyles";
import { Link } from "react-router-dom";

function OrderDetails(props) {
  return (
    <div className="order-details">
      {props.cartItems && props.cartItems.length > 0 ? (
        <React.Fragment>
          <h2>Order Placed</h2>
          <p>Your Oder has been successfully placed.</p>
          <p>
            You can track you orders online through your Invoice Number.
            <br />
            Thank you for shopping with us.
          </p>
          <div className="cart-wrapper">
            <CartList
              cartList={props.cartItems}
              removeItem={props.removeItem}
              className={props.cartView}
            />
          </div>
        </React.Fragment>
      ) : (
        <h2>
          Your Cart is empty <br /> To add items to your cart, go to{" "}
          <Link to="/shop">Shopping Page</Link>
        </h2>
      )}
      <style>
        {`
        .order-details {
          padding: 30px;
          background: ${globalStyles.THEME_WHITE};
          margin-bottom: 30px;
          border-radius: 5px;
        }
        .order-details > * {
          margin-bottom: 20px;
        }
        .order-details h2{
          font-weight: 700;
        }
        .cart-wrapper {
          display: flex;
          flex-wrap: wrap;
        }
        .order-details a{
          color: ${globalStyles.THEME_RED};
        }
      `}
      </style>
    </div>
  );
}

export default OrderDetails;

import React, { Component } from "react";
import Header from "../components/Header";
import Features from "../components/Features";
import LargeButton from "../components/LargeButton";
import OrderDetails from "../components/OrderDetails";
import CartService from "../services/CartService";
import { withRouter } from "react-router-dom";
import Loader from "../components/Loader";

export class PlaceOrder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartItems: [],
      isLoading: false,
    };
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
    await this.getCartData();
    this.setState({ isLoading: false });
    localStorage.clear();
  }

  async getCartData() {
    let response = await CartService.getCartItmes();
    this.setState({ cartItems: response });
  }

  render() {
    return (
      <div className="page-wrapper">
        <Header />
        {this.state.isLoading ? (
          <Loader />
        ) : (
          <section>
            <OrderDetails
              cartItems={this.state.cartItems}
              removeItem={false}
              cartView="horizontal"
            />
            <Features />
            <LargeButton
              className="primary"
              text="continue shopping"
              onClick={() => {
                this.props.history.push("/shop");
              }}
            />
          </section>
        )}
      </div>
    );
  }
}

export default withRouter(PlaceOrder);

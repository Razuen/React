import React, { Component } from "react";
import CardList from "../components/CardList";
import MyCart from "../components/MyCart";
import NavBar from "../components/NavBar";
import PageHeading from "../components/PageHeading";
import { Constants } from "../constants/Constant";
import globalStyles from "../constants/globalStyles";
import CartService from "../services/CartService";
import ProductService from "../services/ProductService";
import { withRouter } from "react-router-dom";
import Loader from "../components/Loader";

export class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryId: null,
      categoryData: null,
      cartItems: [],
      isProductLoading: false,
      isCartLoading: false,
    };
  }

  async componentDidMount() {
    await this.setState({
      categoryId:
        Constants.productSection.indexOf(this.props.match.params.categoryId) ===
        -1
          ? "men"
          : this.props.match.params.categoryId,
    });
    await this.getCategoryData();
    await this.getCartData();
  }

  async componentDidUpdate(prevProps) {
    if (
      prevProps.match.params.categoryId === undefined &&
      this.props.match.params.categoryId === "men"
    ) {
      //do not update
    } else {
      if (
        prevProps.match.params.categoryId !== this.props.match.params.categoryId
      ) {
        await this.setState({
          categoryId:
            Constants.productSection.indexOf(
              this.props.match.params.categoryId
            ) === -1
              ? "men"
              : this.props.match.params.categoryId,
        });
        await this.getCategoryData();
        await this.getCartData();
      }
    }
  }

  async getCategoryData() {
    this.setState({ isProductLoading: true });
    let response = await ProductService.getProductList(this.state.categoryId);
    this.setState({ categoryData: response });
    this.setState({ isProductLoading: false });
  }

  async getCartData() {
    this.setState({ isCartLoading: true });
    let response = await CartService.getCartItmes();
    this.setState({ cartItems: response });
    this.setState({ isCartLoading: false });
  }

  addItemToCart(id) {
    let items = JSON.parse(localStorage.getItem("items"))
      ? JSON.parse(localStorage.getItem("items"))
      : [];
    items.push(id);
    localStorage.setItem("items", JSON.stringify(items));
    this.getCartData();
  }

  removeItemFromCart(id) {
    let items = JSON.parse(localStorage.getItem("items"));
    items.splice(items.indexOf(id), 1);
    localStorage.setItem("items", JSON.stringify(items));
    this.getCartData();
  }

  addToWishList(id) {
    let product = this.state.categoryData.filter(
      (product) => product.id === id
    );

    alert("Product added to your wish list " + product[0].name);
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="wrapper">
          <PageHeading heading={this.state.categoryId} />
          {this.state.isProductLoading ? (
            <Loader />
          ) : (
            this.state.categoryData && (
              <CardList
                dataList={this.state.categoryData}
                onClick={(id) => {
                  this.addItemToCart(id);
                }}
                addToWishList={(id) => {
                  this.addToWishList(id);
                }}
              />
            )
          )}
        </div>

        <MyCart
          cartList={this.state.cartItems}
          removeItem={(id) => this.removeItemFromCart(id)}
          isLoading={this.state.isCartLoading}
        />

        <style>
          {`
          .wrapper{
            width: calc(100% - ${globalStyles.navBar} - ${globalStyles.cart});
            margin-left: ${globalStyles.navBar};
            background: ${globalStyles.THEME_GREY};
            padding: 30px;
            min-height: 100vh;
          }
          `}
        </style>
      </React.Fragment>
    );
  }
}

export default withRouter(Product);

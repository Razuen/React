import ProductService from "./ProductService";

class CartService {
  static async getCartItmes() {
    let items = JSON.parse(localStorage.getItem("items"));
    let products = [];
    let cartData = [];
    let men = await ProductService.getProductList("men");
    let women = await ProductService.getProductList("women");
    let kids = await ProductService.getProductList("kids");

    men.map((product) => {
      return products.push(product);
    });
    women.map((product) => {
      return products.push(product);
    });
    kids.map((product) => {
      return products.push(product);
    });
    if (items) {
      for (let product of products) {
        for (let item of items) {
          if (product.id === item) {
            cartData.push(product);
          }
        }
      }
    }
    return cartData;
  }
}

export default CartService;

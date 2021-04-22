export class Constants {
  static productSection = ["men", "women", "kids"];
  static navList = {
    sections: [
      { category: "men", link: "/shop/men" },
      { category: "women", link: "/shop/women" },
      { category: "kids", link: "/shop/kids" },
    ],
    pages: [
      {
        page: "about us",
        link: "/about",
      },
    ],
  };
  static user = {
    id: 1,
    name: "Razuen",
  };
  static sizes = ["S, ", "M, ", "L "];
  static URL = {
    BASE_URL: "http://nijinserver.herokuapp.com/dummy/shopping",
    GET_PRODUCT_LIST: (id) => `/shop/${id}`,
    GET_FEATURE_LIST: "/features",
  };
}

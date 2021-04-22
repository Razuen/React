import { Constants } from "../constants/Constant";
import APIinstance from "../utils/API";

class ProductService {
  static async getProductList(categoryId) {
    const url = Constants.URL.GET_PRODUCT_LIST(categoryId);
    let response;
    try {
      await APIinstance.get(url)
        .then(
          (data) => {
            response = data;
          },
          (err) => {
            throw err;
          }
        )
        .catch((error) => {
          throw error;
        });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}
export default ProductService;

import { Constants } from "../constants/Constant";
import APIinstance from "../utils/API";

class FeatureService {
  static async getAllFeatures() {
    const url = Constants.URL.GET_FEATURE_LIST;
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
        .catch((err) => {
          throw err;
        });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}
export default FeatureService;

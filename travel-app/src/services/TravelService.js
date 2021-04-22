import axios from "axios";
import { Constants } from "../constants/Constants";
class TravelService {
  static async getAllPlaceDetails() {
    const url = Constants.URL_CONSTANTS.GET_ALL_PLACE_DETAILS;
    let response;
    try {
      await axios
        .get(url)
        .then((data) => {
          response = data;
        })
        .catch((error) => {
          throw error;
        });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  static async getPlaceDetailById(id) {
    const url = Constants.URL_CONSTANTS.GET_PLACE_DETAILS_BY_ID + id;
    let response;
    try {
      await axios
        .get(url)
        .then((data) => {
          response = data;
        })
        .catch((error) => {
          throw error;
        });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}

export default TravelService;

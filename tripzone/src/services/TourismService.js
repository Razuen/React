import Constants from "../constants/Constants";
import { APIinstance } from "../utils/AxiosInstance";

class TourismService {
  static async getCities() {
    let url = Constants.URL.GET_CITIES;
    let response;
    try {
      await APIinstance.get(url)
        .then(
          (res) => (response = res),
          (err) => (response = err)
        )
        .catch((err) => {
          throw err;
        });
    } catch (error) {
      console.log(error);
    }
    return response;
  }
  static async getTouristSpots(city) {
    let url = Constants.URL.GET_TOURIST_SPOTS(city);
    let response;
    try {
      await APIinstance.get(url)
        .then(
          (res) => (response = res),
          (err) => (response = err)
        )
        .catch((err) => {
          throw err;
        });
    } catch (error) {
      console.log(error);
    }
    return response;
  }
  static async getCityInfo(city) {
    let url = Constants.URL.GET_CITY_INFO(city);
    let response;
    try {
      await APIinstance.get(url)
        .then(
          (res) => (response = res),
          (err) => (response = err)
        )
        .catch((err) => {
          throw err;
        });
    } catch (error) {
      console.log(error);
    }
    return response;
  }
}
export default TourismService;

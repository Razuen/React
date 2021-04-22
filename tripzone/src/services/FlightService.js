import Constants from "../constants/Constants";
import { APIinstance } from "../utils/AxiosInstance";

class FlightService {
  static async getFlights(src, dest) {
    let url = Constants.URL.GET_FLIGHT_DETAILS(src, dest);
    let response;
    try {
      await APIinstance.get(url)
        .then(
          (res) => (response = res.data),
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
export default FlightService;

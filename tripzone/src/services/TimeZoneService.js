import Constants from "../constants/Constants";
import { TimeAPIinstance } from "../utils/AxiosInstance";

class TimeZoneService {
  static async getWorldClocks() {
    let url = Constants.URL.GET_TIME_ZONE;
    let response;
    try {
      await TimeAPIinstance.get(url)
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
export default TimeZoneService;

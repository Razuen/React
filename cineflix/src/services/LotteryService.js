import Constants from "../constants/Constants";
import { APIinstance } from "../utils/AxiosInstance";

class LotteryService {
  static async getLotteryDetails(mobile) {
    let url = Constants.URL.LOTTERY(mobile);
    let response;
    try {
      await APIinstance.get(url)
        .then((res) => (response = res.data))
        .catch((err) => {
          throw err;
        });
    } catch (error) {
      console.log(error);
    }
    return response;
  }
}
export default LotteryService;

import Constants from "../constants/Constants";
import { APIinstance } from "../utils/AxiosInstance";

class UserService {
  static async login(id, password) {
    let url = Constants.URL.LOGIN(id, password);
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

export default UserService;

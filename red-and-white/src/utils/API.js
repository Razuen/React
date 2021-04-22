import { Constants } from "../constants/Constant";
import Axios from "axios";

const APIinstance = Axios.create({
  baseURL: Constants.URL.BASE_URL,
});

export default APIinstance;

import Axios from "axios";
import Constants from "../constants/Constants";

const APIinstance = Axios.create({
    baseURL: Constants.URL.BASE_URL,
    responseType: "json",
});


export { APIinstance };

import Constants from "../constants/Constants";
import { APIinstance } from "../utils/AxiosInstance";

class MovieService {
    static async getMovieDetails(page) {
        let url = Constants.URL.GET_MOVIES(page);
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
export default MovieService
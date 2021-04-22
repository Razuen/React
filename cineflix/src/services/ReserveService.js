import Constants from "../constants/Constants";
import { APIinstance } from "../utils/AxiosInstance";

class ReserveService {
    static async reserveBooking(language, good, parking) {
        let url = Constants.URL.BOOK(language, good, parking);
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

    static async getBookingPreferences() {
        let url = Constants.URL.GET_BOOKING_PREFERENCES;
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
export default ReserveService
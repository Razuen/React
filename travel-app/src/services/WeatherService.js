import Axios from "axios";

class WeatherService {
  static async getWeatherDetails(place) {
    const url =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      place +
      "&appid=13262dea5a97e78e11dc9d5b327e644b";

    let response;
    try {
      await Axios.get(url)
        .then((data) => {
          response = data.data.main;
        })
        .catch((err) => {
          throw err;
        });

      return response;
    } catch (error) {
      console.log(error);
    }
  }
}

export default WeatherService;

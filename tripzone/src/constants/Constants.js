class Constants {
  static URL = {
    BASE_URL: "http://nijinserver.herokuapp.com/dummy/tripzone/",
    TIME_ZONE_URL: "http://worldclockapi.com/api/json/est/",
    GET_TIME_ZONE: "now",
    WEATHER_API: "https://api.openweathermap.org/data/2.5/weather?",
    GET_WEATHER: (place) => `q=${place}&appid=${Constants.WEATHER_API_ID}`,
    LOGIN: (id, password) => `login?username=${id}&password=${password}`,
    GET_CITIES: "cities",
    GET_CITY_INFO: (city) => `city/${city}`,
    GET_TOURIST_SPOTS: (city) => `tourism/${city}`,
    GET_FLIGHT_DETAILS: (src, dest) => `flights?src=${src}&dest=${dest}`,
  };
  static WEATHER_API_ID = "13262dea5a97e78e11dc9d5b327e644b";
  static cityName = {
    BLR: "Bangalore",
    MAA: "Chennai",
    OTW: "Ottawa",
    PAR: "Paris",
    LON: "London",
  };
  static DEFAULT_CARD_IMG =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSAMwjoD-ucq7hehSV0MmKIndbJR3K2erRiTl_3BhN1u46IrYv&usqp=CAU";

  static TAX_BUTTON_LIST = [
    {
      id: 1,
      text: "10%",
      value: 10,
    },
    {
      id: 2,
      text: "20%",
      value: 20,
    },
    {
      id: 3,
      text: "30%",
      value: 30,
    },
  ];

  static DISCOUNT_BUTTON_LIST = [
    {
      id: 1,
      text: "1 YEAR",
      value: 5,
    },
    {
      id: 2,
      text: "2 YEAR",
      value: 10,
    },
    {
      id: 3,
      text: "3 YEAR",
      value: 15,
    },
  ];
}

export default Constants;

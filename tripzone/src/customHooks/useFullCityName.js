import Constants from "../constants/Constants";

function useFullCityName(city) {
  let name = Constants.cityName[city];
  return name;
}

export { useFullCityName };

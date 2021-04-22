import React, { useEffect, useMemo, useState } from "react";
import PlacePromotion from "../../components/PlacePromotion/PlacePromotion";
import AvailableFlights from "../../containers/AvailableFlights/AvailableFlights";
import BookNow from "../../containers/BookNow/BookNow";
import FavDestination from "../../containers/FavDestination/FavDestination";
import Header from "../../containers/Header/Header";
import PlanMyTrip from "../../containers/PlanMyTrip/PlanMyTrip";
import usePrevious from "../../customHooks/usePrevious";
import FlightService from "../../services/FlightService";
import TourismService from "../../services/TourismService";

function Home() {
  const [source, setsource] = useState("MAA");
  const [destination, setdestination] = useState("MAA");
  const [toggleFlightsView, settoggleFlightsView] = useState(false);
  const [flightList, setflightList] = useState(null);
  const [toggleLocalPromotion, settoggleLocalPromotion] = useState(false);
  const [cityDetails, setcityDetails] = useState(null);
  const [selectedFlight, setselectedFlight] = useState(null);
  const [toggleBookNow, settoggleBookNow] = useState(false);
  const [previousCity, setPrevious] = usePrevious(null);
  const [cities, setcities] = useState(null);
  const [globalTouristSpot, setglobalTouristSpot] = useState(null);

  //containers
  const FavDestinationContainer = useMemo(() => {
    return (
      <FavDestination
        showCityDetails={(city) => {
          getCityDetails(city);
          setPrevious(city);
        }}
      />
    );
  }, []);

  const PlanMyTripContainer = useMemo(() => {
    return (
      <PlanMyTrip
        source={source}
        destination={destination}
        cities={cities}
        onSourceChange={(src) => {
          setsource(src);
        }}
        onDestinationChange={(dest) => onDestinationChange(dest)}
        onSearchClick={() => onSearchClick()}
      />
    );
  }, [source, destination, cities]);

  const AvailableFlightsContainer = useMemo(() => {
    console.log("change in fight list");

    return (
      <AvailableFlights
        flights={flightList}
        bookFlight={(flight) => {
          setselectedFlight(flight);
          settoggleBookNow(true);
        }}
      />
    );
  }, [flightList]);

  const CityPromotionContainer = useMemo(() => {
    return (
      <PlacePromotion
        heading={
          cityDetails &&
          "Travelling to " +
          (cityDetails.cityDetails
            ? cityDetails.cityDetails.name
            : " your favourite destination") +
          " ? Know more about it."
        }
        placeInfo={cityDetails}
        color="yellow"
        showButton={true}
        showPreviousCityDetails={() =>
          previousCity && getCityDetails(previousCity)
        }
        noDataText={"We don’t currently service this city."}
      />
    );
  }, [cityDetails]);

  const BookNowContainer = useMemo(() => {
    return (
      <BookNow
        flightDetail={selectedFlight}
        bookTicket={() => {
          alert("Ticket has been booked");
          settoggleFlightsView(false);
          settoggleBookNow(false);
        }}
      />
    );
  }, [selectedFlight]);

  const GlobalPromotionContainer = useMemo(() => {
    return (
      <PlacePromotion
        heading="The World is Beautiful. Keep Travelling"
        placeInfo={globalTouristSpot}
        color={"grey"}
      />
    );
  }, [globalTouristSpot]);

  //---conatiner handlers

  /**
   * onDestinationChange :: show city promotion on chnag eof destination
   * @param {*} dest
   */
  const onDestinationChange = (dest) => {
    setdestination(dest);
    getCityDetails(dest);
  };

  /**
   * onSearchClick :: search flights for the entered location
   */
  const onSearchClick = () => {
    if (source === destination) {
      alert("source and destination cannot be same");
    } else {
      settoggleFlightsView(true);
      getFlights();
      settoggleBookNow(false);
    }
  };

  //service Calls

  /**
   * getFlights :: get list of avalable flights
   */
  const getFlights = async () => {
    let response = await FlightService.getFlights(source, destination);
    setflightList(response);
  };

  /**
   * getCityDetails :: get city details for city promotion
   * @param {*} city
   */
  const getCityDetails = async (city) => {
    let response = await TourismService.getCityInfo(city);
    let touristSpot = await TourismService.getTouristSpots(city);
    let data;
    if (response.data && touristSpot.data) {
      data = { cityDetails: response.data, touristSpot: touristSpot.data };
    } else {
      data = {};
    }
    setcityDetails(data);
    settoggleLocalPromotion(true);
  };

  const getGlobalTouristSpot = async () => {
    let touristSpot = await TourismService.getTouristSpots("ALL");
    setglobalTouristSpot({ touristSpot: touristSpot.data });
  };

  /**
   * getAllCities :: get list of cities
   */
  const getAllCities = async () => {
    let response = await TourismService.getCities();
    setcities(response.data);
  };

  useEffect(() => {
    getAllCities();
    getGlobalTouristSpot();
  }, []);

  return (
    <React.Fragment>
      <Header />
      <div className="wrapper">
        <div className="left-container">
          {FavDestinationContainer}
          {toggleLocalPromotion && cityDetails && CityPromotionContainer}
          {globalTouristSpot && GlobalPromotionContainer}
        </div>
        <div className="right-container">
          {cities && PlanMyTripContainer}
          {toggleFlightsView && AvailableFlightsContainer}
          {toggleBookNow && BookNowContainer}
        </div>
        <style jsx>
          {`
            .wrapper {
              display: flex;
              width: 85%;
              margin: 0 auto;
            }
            .left-container {
              width: 70%;
            }
            .right-container {
              width: 30%;
            }
          `}
        </style>
      </div>
    </React.Fragment>
  );
}

export default Home;

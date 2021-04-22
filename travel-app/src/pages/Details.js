import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Card from "../components/Card";
import Header from "../components/Header";
import Search from "../components/Search";
import TravelService from "../services/TravelService";
import { globalStyles } from "../constants/globalStyles";
import Title from "../components/Title";
import WeatherService from "../services/WeatherService";

export class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locationId: null,
      locationData: null,
      locationList: null,
      otherLocationsList: null,
      searchKeyWord: "",
      filteredList: null,
      weather: null,
    };
  }

  async componentDidMount() {
    await this.fetchData(this.props.match.params.placeId);
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.match.params.placeId !== this.props.match.params.placeId) {
      this.setState({ searchKeyWord: "", filteredList: null });
      this.fetchData(this.props.match.params.placeId);
    }
  }

  /**
   * fetch the data and set the state for the component
   * @param {*} locationId
   */
  async fetchData(locationId) {
    await this.setState({ locationId: locationId });
    let response = await TravelService.getPlaceDetailById(
      this.state.locationId
    );
    this.setState({ locationData: response[0] });
    this.getSimilarLocation();
    this.getWeatherData();
  }

  /**
   * get data to show similar location component
   */
  async getSimilarLocation() {
    let response = await TravelService.getAllPlaceDetails();
    this.setState({ locationList: response });
    //remove the current location
    response.splice(
      response.findIndex((i) => i.id === this.state.locationId),
      1
    );
    this.setState({ locationList: response });
    //select 3 random location
    let otherLocationsList = response
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
    this.setState({ otherLocationsList });
  }

  /**
   * get weather data
   */

  async getWeatherData() {
    let res = await WeatherService.getWeatherDetails(
      this.props.match.params.placeId
    );
    res
      ? this.setState({ weather: (res.temp - 273.15).toFixed(2) })
      : this.setState({ weather: 33 });
  }

  /**
   * redirect ro the selected place details
   */
  redirectToPlaceDetails = (id) => {
    let url = "/details/" + id;
    this.props.history.push(url);
  };

  /**
   * search component
   */
  searchPlace = (searchWord) => {
    this.setState({ searchKeyWord: searchWord });
    if (searchWord.length > 0) {
      this.setState({
        filteredList: [
          ...this.state.locationList.filter((res) => {
            return res.id.includes(searchWord);
          }),
        ],
      });
    } else if (searchWord.length === 0) {
      this.setState({
        filteredList: [],
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <Header text={"explore..r"}>
          <Search
            placeholder="Search"
            value={this.state.searchKeyWord}
            options={this.state.locationList}
            filteredList={this.state.filteredList}
            onChange={(value) => this.searchPlace(value)}
            onClick={(event, id) => {
              this.redirectToPlaceDetails(id);
            }}
          />
        </Header>
        <div className="wrapper">
          {this.state.locationData && (
            <React.Fragment>
              <div className="place-img">
                <div className="image-wrapper">
                  <img
                    src={require("../assets/images/" +
                      this.state.locationData.image)}
                    alt="placeImage"
                  />
                </div>
                <h1> {this.state.locationData.title} </h1>
              </div>
              <div className="place-name-wrapper">
                <h3 className="place-name">
                  {this.state.locationData.location}
                </h3>
                <h3 className="temparature">
                  {this.state.weather ? this.state.weather : 33}
                  <sup className="degree"> o</sup>C
                </h3>
              </div>
              <p className="place-description">
                {this.state.locationData.description}
              </p>
            </React.Fragment>
          )}
          <Title text="Similar Other Locations" alignment="alignLeft" />
          {this.state.otherLocationsList && (
            <div className="card-wrapper">
              {this.state.otherLocationsList.map((locationData) => {
                return (
                  <Card
                    locationData={locationData}
                    key={locationData.id}
                    onClick={(placeId) => {
                      this.redirectToPlaceDetails(placeId);
                    }}
                  />
                );
              })}
            </div>
          )}
        </div>

        <style>
          {`
          .place-img{
            margin: 50px auto;
            text-align: center;
            width: 60%;
          }
          .image-wrapper{
            width: 70%;
           margin: 0 auto 10px;
          }
          .image-wrapper img{
            width: 100%;
            height: 100%;
          }
          .place-img h1{
            font-weight: 700;
            color: ${globalStyles.THEME_PURPLE};
          }
          .place-name-wrapper{
            display: flex;
            justify-content: space-between;
            padding: 20px 0;
            border-top: 0.5px solid;
            border-bottom: 0.5px solid;
          }
          .place-name{
            color:${globalStyles.THEME_PURPLE};
          }
          .temparature{
            position: relative;
          }
          .degree{
            position: absolute;
            right: 14px;
            font-size: 0.7rem;
          }
          .place-description{
            margin: 20px 0 50px;
          }
          
          `}
        </style>
      </React.Fragment>
    );
  }
}

export default withRouter(Details);

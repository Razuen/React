import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Banner from "../components/Banner";
import CardList from "../components/CardList";
import Header from "../components/Header";
import PersonalDetailsForm from "../components/PersonalDetailsForm";
import Search from "../components/Search";
import Title from "../components/Title";
import TravelService from "../services/TravelService";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationList: null,
      searchKeyWord: "",
      filteredList: null,
    };
  }

  async componentDidMount() {
    let response = await TravelService.getAllPlaceDetails();
    this.setState({ locationList: response });
  }

  /**
   * search the location
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

  redirectToPlaceDetails = (id) => {
    let url = "/details/" + id;
    this.props.history.push(url);
  };

  render() {
    return (
      <React.Fragment>
        <Header className={"contrast"} text={"explore..r"}>
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
        <Banner />
        {this.state.locationList && (
          <section className="wrapper">
            <Title text=" Explore, The World is Not Enough" />
            <CardList
              dataList={this.state.locationList}
              onClick={(placeId) => {
                this.redirectToPlaceDetails(placeId);
              }}
            />
          </section>
        )}
        <PersonalDetailsForm />
      </React.Fragment>
    );
  }
}

export default withRouter(Home);

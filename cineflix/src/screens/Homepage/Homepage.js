import React, { Component } from "react";
import Header from "../../components/Header/Header";
import "./Homepage.scss";
import Lottery from "../../components/Lottery/Lottery";
import LotteryService from "../../services/LotteryService";
import Advertisement from "../../components/Advertisement/Advertisement";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import AllMovies from "../../containers/AllMovies/AllMovies";
import MovieService from "../../services/MovieService";
import MovieDetails from "../../containers/MovieDetails/MovieDetails";
import WatchNow from "../../containers/WatchNow/WatchNow";

export class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "red",
      mobileNumber: "",
      lottery: null,
      advertisement: "some experiences speak! others live for a lifetime.",
      movies: null,
    };
  }

  getMovieDetails = async (pageNum) => {
    let response = await MovieService.getMovieDetails(pageNum);
    if (response) {
      console.log(response);
      this.setState({ movies: response });
    }
  };

  checkLottery = async () => {
    let response = await LotteryService.getLotteryDetails(
      this.state.mobileNumber
    );
    if (response) {
      this.setState({ lottery: response.prize });
      console.log("success");
    } else {
      throw new Error("No lottery");
    }
  };

  async componentDidMount() {
    await this.getMovieDetails(1);
  }

  render() {
    return (
      <div className={"homepage " + this.state.color}>
        <Header />
        <ErrorBoundary>
          <Lottery
            value={this.state.mobileNumber}
            onChange={(value) => {
              this.setState({ mobileNumber: value });
            }}
            onClick={() => {
              if (this.state.mobileNumber.length === 10) this.checkLottery();
            }}
          />
        </ErrorBoundary>
        <section>
          <AllMovies movies={this.state.movies} />
          <MovieDetails />
          <WatchNow />
        </section>
        <Advertisement text={this.state.advertisement} />
      </div>
    );
  }
}

export default Homepage;

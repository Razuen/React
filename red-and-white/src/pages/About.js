import React, { Component } from "react";
import Banner from "../components/Banner";
import Features from "../components/Features";
import Header from "../components/Header";
import LargeButton from "../components/LargeButton";
import { withRouter } from "react-router-dom";

export class About extends Component {
  render() {
    return (
      <div className="page-wrapper">
        <Header />
        <section>
          <Banner img="about-top-banner.png" />
          <Banner className="large" img="about-middle-banner.png" />
          <Features />
          <LargeButton
            text="shop now"
            className="primary"
            onClick={() => {
              this.props.history.push("/shop");
            }}
          />
        </section>
      </div>
    );
  }
}

export default withRouter(About);

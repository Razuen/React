import React, { Component } from "react";
import Message from "../Message/Message";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }
  render() {
    console.log(this.state.hasError);
    if (this.state.hasError)
      return (
        <Message
          text={
            "Sorry! We are unable to process your Phone Number for a Discount"
          }
        />
      );
    else return this.props.children;
  }
}

export default ErrorBoundary;

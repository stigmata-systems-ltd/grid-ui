import React, { Component } from "react";
import { Alert } from "reactstrap";

class CustomAlerts extends Component {
  render() {
    return (
      <Alert color={this.props.type}>{this.props.text}</Alert>
    );
  }
}

export default CustomAlerts;

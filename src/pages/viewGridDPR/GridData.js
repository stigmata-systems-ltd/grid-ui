import React, { Component } from "react";

class GridData extends Component {
  render() {
    return (
      <h5 className="mb-4">{this.props.label} : {this.props.data}</h5>
    );
  }
}

export default GridData;

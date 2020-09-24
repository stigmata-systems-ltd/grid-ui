import React, { Component } from "react";
import { CSVLink } from "react-csv";

class ExportExcel extends Component {
  render() {
    return (
      <CSVLink 
      data={this.props.data} 
      // headers={this.props.headers}
      filename={this.props.filename+".csv"}
      className="btn btn-primary"
      >
        Download As Excel
      </CSVLink>
    );
  }
}

export default ExportExcel;

import React, { Component } from "react";
import DataTable from "react-data-table-component";

class CustomDataTable extends Component {
  render() {
    return (
      <DataTable
        title={this.props.title}
        columns={this.props.metaData}
        data={this.props.bodyData}
      />
    );
  }
}

export default CustomDataTable;

import React, { Component } from "react";
import DataTable from "react-data-table-component";

const customStyles = {
  // table: {
  //   style: {border: "1px solid rgba(0,0,0,0.12)"},
  // },
  headCells: {
    style: {
      fontSize: '14px',
      fontWeight: "bold"
    },
  },
  rows: {
    style: {
      fontSize: '14px',
    }
  },
}
class CustomDataTable extends Component {
  render() {
    return (
      <DataTable
        title={this.props.title}
        columns={this.props.metaData}
        data={this.props.bodyData}
        pagination={this.props.pagination}
        paginationPerPage={this.props.paginationPerPage}
        paginationTotalRows={this.props.paginationTotalRows}
        paginationRowsPerPageOptions={[5, 10, 15, 20, 25, 30]}
        noHeader={this.props.noHeader}
        customStyles={customStyles}
      />
    );
  }
}

export default CustomDataTable;

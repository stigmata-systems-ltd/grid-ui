import React, { Component } from "react";
import TextInput from "./forms/TextInput";

class TableFilter extends Component {
  render() {
    return (
      <TextInput
        id="search"
        type="text"
        placeholder="Filter By Name"
        aria-label="Search Input"
        value={this.props.filterText}
        onChange={this.props.onFilter}
      />
    );
  }
}

export default TableFilter;

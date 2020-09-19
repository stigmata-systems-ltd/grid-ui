import React, { Component } from "react";
import TextInput from "./forms/TextInput";

class TableFilter extends Component {
  render() {
    return (
      <TextInput
        id="search"
        type="text"
        placeholder={this.props.placeholder}
        value={this.props.filterText}
        onChange={(e) => this.props.onFilter(e)}
        size={this.props.size}
        fieldSize={this.props.fieldSize}
      />
    );
  }
}

export default TableFilter;

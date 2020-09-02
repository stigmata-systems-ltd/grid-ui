import React, { Component } from "react";
import IconButton from "../common/forms/IconButton";

class DataTable extends Component {
  renderTableHeaders = () => {
    return this.props.metaData.map((header) => <th>{header}</th>);
  };

  render() {
    return (
      <div class="table-responsive pt-3 data-table">
        <table class="table table-bordered">
          <thead>
            <tr>{this.renderTableHeaders()}</tr>
          </thead>
          <tbody>
            {this.props.bodyData.map((data) => {
              return (
                <tr>
                  {this.props.showRowDelete && (
                    <td class="action-btns" style={{width: "1%"}}>
                      <IconButton
                        iconName="faTrash"
                        onClick={this.props.onClick}
                      />
                    </td>
                  )}
                  {Object.keys(data).map((key) => (
                    <>
                      <td> {data[key].toString()}</td>
                    </>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default DataTable;

import React, { Component } from "react";
import Button from "./forms/Button";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class ActionDataTable extends Component {
  renderTableHeaders = () => {
    return this.props.metaData.map((header) => <th>{header}</th>);
  };

  render() {
    return (
      <div class="table-responsive pt-3 data-table">
        <table class="table table-bordered table-striped table-hover">
          <thead>
            <tr>{this.renderTableHeaders()}</tr>
          </thead>
          <tbody>
            {this.props.bodyData.map((data) => {
              return (
                <tr>
                  {Object.keys(data).map((key) => (
                    <>
                      <td> {data[key].toString()}</td>
                    </>
                  ))}
                  <td class="action-btns">
                    
                    <Link to="/viewgriddpr" className="btn btn-secondary">View</Link>

                    {/* <Button btnText="View" btnType="btn-secondary" onClick={this.props.onClick} /> */}
                    {/* <Button btnText="Delete" btnType="btn-secondary" onClick={this.props.onClick} /> */}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ActionDataTable;

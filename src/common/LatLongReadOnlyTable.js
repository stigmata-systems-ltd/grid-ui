import React, { Component } from 'react';
import Button from './forms/Button';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class ActionDataTable extends Component {
  renderTableHeaders = () => {
    return this.props.metaData.map(header => <th>{header}</th>);
  };

  render() {
    return (
      <div class="table-responsive pt-3 data-table">
        <table class="table table-bordered table-striped table-hover">
          <thead>
            <tr>{this.renderTableHeaders()}</tr>
          </thead>
          <tbody>
            {this.props.bodyData.map((data, i) => {
              return (
                <tr>
                  {Object.keys(data).map(key => (
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

export default ActionDataTable;

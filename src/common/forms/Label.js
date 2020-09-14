import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import Col6 from './Col6';
class Label extends Component {
  render() {
    return (
      <Col6 size={this.props.size}>
        <div class="form-group row">
          <label class="col-sm-3 col-form-label">{this.props.label}:</label>
          <label class="col-sm-3 col-form-label">{this.props.value}</label>
          {/* <div class="col-sm-9">
            <div>
              {this.props.readOnly === 'test' ? (
                <input
                  type="text"
                  name={this.props.name}
                  id={this.props.id}
                  value={this.props.value}
                  class="form-control"

                  onChange={e => this.props.onChange(e)}
                />
              ) : (
                <input
                  type="text"
                  name={this.props.name}
                  id={this.props.id}
                  value={this.props.value}
                  class="form-control"

                  onChange={e => this.props.onChange(e)}
                />
              )}
            </div>
          </div> */}
        </div>
      </Col6>
    );
  }
}

export default Label;

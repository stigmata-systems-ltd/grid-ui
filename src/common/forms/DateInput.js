import React, { Component } from 'react';
import Col6 from './Col6';

class DateInput extends Component {
  render() {
    return (
      <Col6 size={this.props.size}>
        <div class="form-group row">
          <label class="col-sm-3 col-form-label">{this.props.label}</label>
          <div class="col-sm-9">
            <input
              type={`${this.props.type ? this.props.type : "date"}`}
              class="form-control"
              onChange={e => this.props.onChange(e)}
              value={this.props.value}
            />
          </div>
        </div>
      </Col6>
    );
  }
}

export default DateInput;

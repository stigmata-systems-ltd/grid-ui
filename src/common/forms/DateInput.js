import React, { Component } from 'react';
import Col6 from './Col6';

class DateInput extends Component {
  render() {
    let input;
    if (this.props.disabled) {
      input = (
        <input
          type={`${this.props.type ? this.props.type : 'date'}`}
          class="form-control"
          onChange={e => this.props.onChange(e)}
          value={this.props.value}
          disabled
        />
      );
    } else {
      input = (
        <input
          type={`${this.props.type ? this.props.type : 'date'}`}
          class="form-control"
          onChange={e => this.props.onChange(e)}
          value={this.props.value}
        />
      );
    }
    return (
      <Col6 size={this.props.size}>
        <div class="form-group row">
          <label class="col-sm-3 col-form-label">{this.props.label}</label>
          <div class="col-sm-9">{input}</div>
        </div>
      </Col6>
    );
  }
}

export default DateInput;

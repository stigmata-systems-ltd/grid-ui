import React, { Component } from 'react';
import Col6 from './Col6';

class SimpleDropDown extends Component {
  render() {
    let select;
    if (this.props.disabled) {
      select = (
        <select
          class="form-control"
          onChange={e => this.props.onChange(e)}
          value={this.props.value}
          disabled
        >
          {' '}
          <option value="choose..">Choose..</option>
          {this.props.selectOptions &&
            this.props.selectOptions.map(option => (
              <option
                value={option.id}
                name={option.gridName ? option.gridName : option.label}
              >
                {option.gridName ? option.gridName : option.label}
              </option>
            ))}
        </select>
      );
    } else {
      select = (
        <select
          class="form-control"
          onChange={e => this.props.onChange(e)}
          value={this.props.value}
        >
          {' '}
          <option value="choose..">Choose..</option>
          {this.props.selectOptions &&
            this.props.selectOptions.map(option => (
              <option
                value={option.id}
                name={option.gridName ? option.gridName : option.label}
              >
                {option.gridName ? option.gridName : option.label}
              </option>
            ))}
        </select>
      );
    }
    return (
      <Col6 size={this.props.size}>
        <div class="form-group row">
          <label class="col-sm-3 col-form-label">{this.props.label}</label>
          <div class="col-sm-9">{select}</div>
        </div>
      </Col6>
    );
  }
}

export default SimpleDropDown;

import React, { Component } from 'react';
import Col6 from './Col6';
import Select from 'react-select';

class SimpleDropDown extends Component {
  render() {
    return (
      <Col6 size={this.props.size}>
        <div class="form-group row">
          <label 
            class={`${this.props.labelSize ? this.props.labelSize : "col-sm-3"} col-form-label`}
          >
              {this.props.label}
          </label>
          <div class={`${this.props.fieldSize ? this.props.fieldSize : "col-sm-9"}`}>
            <Select
              className=""
              onChange={e => this.props.onChange(e)}
              value={this.props.value}
              options={this.props.selectOptions}
              isSearchable={true}
              isMulti={this.props.isMulti}
            />
          </div>
        </div>
      </Col6>
    );
  }
}

export default SimpleDropDown;

import React, { Component } from 'react';
import Col6 from './Col6';
import Select from 'react-select';

class SimpleDropDown extends Component {
  render() {
    return (
      <Col6 size={this.props.size}>
        <div class="form-group row">
          <label class="col-sm-3 col-form-label">{this.props.label}</label>
          <div class="col-sm-9">
            <Select
              classNmae="form-control"
              onChange={e => this.props.onChange(e)}
              value={this.props.value}
              options={this.props.selectOptions}
              isSearchable={true}
            />
          </div>
        </div>
      </Col6>
    );
  }
}

export default SimpleDropDown;

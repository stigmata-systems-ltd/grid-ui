import React, { Component } from 'react';

class SimpleDropDown extends Component {
  render() {
    return (
      <div class="col-md-6">
        <div class="form-group row">
          <label class="col-sm-3 col-form-label">{this.props.label}</label>
          <div class="col-sm-9">
            <select
              class="form-control"
              onChange={e => this.props.onChange(e)}
              value={this.props.value}
            >
              <option value="choose..">Choose..</option>
              {this.props.selectOptions &&
                this.props.selectOptions.map(option => (
                  <option value={option.id} name={option.gridName}>
                    {option.gridName}
                  </option>
                ))}
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default SimpleDropDown;

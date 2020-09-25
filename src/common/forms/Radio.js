import React, { Component } from "react";

class Radio extends Component {
  render() {
    return (
      <div class="form-check float-right">
        <label class="form-check-label">
          <input
            type="radio"
            class="form-check-input"
            value={this.props.value}
            {...this.props.checked}
          />
          {this.props.label}
          <i class="input-helper"></i>
        </label>
      </div>
    );
  }
}

export default Radio;

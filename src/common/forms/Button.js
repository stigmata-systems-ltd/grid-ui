import React, { Component } from 'react';
import { NONAME } from 'dns';

class Button extends Component {
  render() {
    const isDisable = this.props.disable && 'disabled';
    console.log(`isDisabled: ${isDisable}`);
    return (
      <button
        type="button"
        class={`btn mb-2 ${
          this.props.btnType === 'primary' ? 'btn-primary' : this.props.btnType
        }`}
        onClick={this.props.onClick}
        isDisable
      >
        {this.props.btnText}
      </button>
    );
  }
}

export default Button;

import React, { Component } from 'react';
import { NONAME } from 'dns';

class Button extends Component {
  render() {
    return (
      <button
        type="button"
        class={`btn mb-2 ${
          this.props.btnType === 'primary' ? 'btn-primary' : this.props.btnType
        }`}
        onClick={this.props.onClick}
        disabled={this.props.disable}
      >
        {this.props.btnText}
      </button>
    );
  }
}

export default Button;

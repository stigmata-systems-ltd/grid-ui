import React, { Component } from 'react';

class TextArea extends Component {
  render() {
    return (
      <div class={this.props.size}>
        <div class="form-group">
          <label class={this.props.labelSize}>{this.props.label}</label>
          <textarea
            class={`${this.props.fieldSize} form-control`}
            placeholder={this.props.placeholder}
            onChange={e => this.props.onChange(e)}
            value={this.props.value}
          ></textarea>
        </div>
      </div>
    );
  }
}

export default TextArea;

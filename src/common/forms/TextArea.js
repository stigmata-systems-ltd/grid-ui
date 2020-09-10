import React, { Component } from 'react';

class TextArea extends Component {
  render() {
    return (
      <div class={this.props.size}>
        <div class="form-group">
          <label for="exampleTextarea1">{this.props.label}</label>
          <textarea
            class="form-control"
            id="exampleTextarea1"
            rows="4"
            onChange={e => this.props.onChange(e)}
          ></textarea>
        </div>
      </div>
    );
  }
}

export default TextArea;

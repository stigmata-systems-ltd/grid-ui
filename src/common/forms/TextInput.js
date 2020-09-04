import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
class TextInput extends Component {
  render() {
    return (
      <div class="col-md-6">
        <div class="form-group row">
          <label class="col-sm-3 col-form-label">{this.props.label}</label>
          <div class="col-sm-9">
            <input
              type="text"
              name={this.props.name}
              id={this.props.id}
              value={this.props.value}
              class="form-control"
              onChange={e => this.props.onChange(e)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default TextInput;

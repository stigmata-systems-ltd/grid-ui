import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import Col6 from "./Col6";
class TextInput extends Component {
  render() {
    return (
      <Col6 size={this.props.size}>
        <div class="form-group row">
          <label
            class={`${
              this.props.labelSize ? this.props.labelSize : "col-sm-3"
            } col-form-label`}
          >
            {this.props.label}
          </label>
          <div class={`${this.props.fieldSize ? this.props.fieldSize : "col-sm-9"}`}>
            <input
              type="text"
              name={this.props.name}
              id={this.props.id}
              value={this.props.value}
              class="form-control"
              onChange={(e) => this.props.onChange(e)}
            />
          </div>
        </div>
      </Col6>
    );
  }
}

export default TextInput;

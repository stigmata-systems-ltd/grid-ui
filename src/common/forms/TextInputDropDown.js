import React, { Component } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "react-bootstrap";
import Col6 from "./Col6";
class TextInput extends Component {
  render() {
    return (
      <Col6 size={this.props.size}>
        <Dropdown isOpen={this.props.dropdownOpen}>
          <DropdownToggle>
            <div class="form-group row">
              <label class="col-sm-3 col-form-label">{this.props.label}</label>
              <div class="col-sm-9">
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
          </DropdownToggle>
          <DropdownMenu>
            {this.props.dropDownData.map(item => 
              <DropdownItem>{item.value}</DropdownItem>)
            }
          </DropdownMenu>
        </Dropdown>
      </Col6>
    );
  }
}

export default TextInput;

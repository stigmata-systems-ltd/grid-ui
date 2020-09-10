
import React, { Component } from "react";
import FaIcon from "../FaIcon";
import Col6 from "./Col6";
class CheckBox extends Component {

    render() {
        return (
            <Col6 size={this.props.size}>
                <div class="form-group">
                    <div class="form-check">
                        <label class="form-check-label">
                            <input type="checkbox" class="form-check-input" id={this.props.id} value={this.props.value} onChange={this.props.onChange} />
                              {this.props.label}
                            <i class="input-helper"></i></label>
                    </div>
                </div>
            </Col6>
        )
    }
}

export default CheckBox;
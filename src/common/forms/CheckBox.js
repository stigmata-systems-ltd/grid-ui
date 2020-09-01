
import React, { Component } from "react";

class CheckBox extends Component {

    render() {
        return (
            <div class="col-md-6">
                <div class="form-group">
                    <div class="form-check">
                        <label class="form-check-label">
                            <input type="checkbox" class="form-check-input" />
                              {this.props.label}
                            <i class="input-helper"></i></label>
                    </div>
                </div>
            </div>
        )
    }
}

export default CheckBox;
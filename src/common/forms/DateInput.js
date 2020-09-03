import React, { Component } from "react";

class DateInput extends Component {

    render() {
        return (
            <div class="col-md-6">
                <div class="form-group row">
                    <label class="col-sm-3 col-form-label">{this.props.label}</label>
                    <div class="col-sm-9">
                        <input type="date"  class="form-control" />
                    </div>
                </div>
            </div>
        )
    }
}

export default DateInput;
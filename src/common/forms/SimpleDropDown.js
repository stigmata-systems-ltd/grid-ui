import React, { Component } from "react";

class SimpleDropDown extends Component {

    render() {
        return (
            <div class="col-md-6" >
                <div class="form-group row">
                    <label class="col-sm-3 col-form-label">{this.props.label}</label>
                    <div class="col-sm-9">
                        <select 
                            class="form-control" 
                            onChange={this.props.onChange}
                            value={this.props.value}
                        >
                            {this.props.selectOptions &&
                            this.props.selectOptions.map(
                                (option) => <option value={option.value}>{option.text}</option>)}
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}

export default SimpleDropDown;
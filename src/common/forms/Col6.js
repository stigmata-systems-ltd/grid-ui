import React from "react";
import { Component } from "react";

class Col6 extends Component {

    render() {
        return (
            <div class={`${this.props.size ? this.props.size : "col-md-6"}`}>
                {this.props.children}
            </div>
        )
    }
}

export default Col6;
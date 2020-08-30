import React, { Component } from "react";

class Button extends Component {

    render() {
        return(
            <button 
                type="button" 
                class={`btn mb-2 ${this.props.btnType === "primary" ? "btn-primary" : "btn-light"}`}
                onClick={this.props.onClick}
            >{this.props.btnText}</button>
        )
    }
}

export default Button;
import React, { Component } from "react";

class ButtonSubmit extends Component {

    render() {
        return (
            <button
                type="submit"
                class={`btn mb-2 ${this.props.btnType === "primary" ? "btn-primary" : this.props.btnType}`}>{this.props.btnText}
            </button>
        )
    }
}

export default ButtonSubmit;
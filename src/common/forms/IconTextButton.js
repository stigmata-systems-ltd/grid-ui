import React, { Component } from "react";
import FaIcon from "../FaIcon";
class IconTextButton extends Component {

    render() {
        return (
            <button 
                type="button" 
                class="btn btn-primary btn-icon-text"
                onClick={this.props.onClick}
            >
                <FaIcon iconName="faPlusCircle" />
                    {this.props.btnText}
            </button>
        )
    }
}

export default IconTextButton;
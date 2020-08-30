import React, { Component } from "react";
import FaIcon from "../FaIcon";
class IconButton extends Component {

    render() {
        return (
            <button 
                type="button" 
                class="btn btn-icon-text"
                onClick={this.props.onClick}
            >
                <FaIcon 
                    iconName={this.props.iconName} 
                    size="lg"
                />
            </button>
        )
    }
}

export default IconButton;
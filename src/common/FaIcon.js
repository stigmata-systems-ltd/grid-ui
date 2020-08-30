import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as fa from '@fortawesome/free-solid-svg-icons';

class FaIcon extends Component {

    render(){
        return (
            <FontAwesomeIcon 
                className={this.props.className}
                size={this.props.size}
                icon={fa[this.props.iconName]}
                {...this.props}
            />
        )
    }
}

export default FaIcon;
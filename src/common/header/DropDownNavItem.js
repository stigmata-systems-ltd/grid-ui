import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as fa from '@fortawesome/free-solid-svg-icons';

class DropDownNavItem extends Component {

    render() {
        return (this.props.navData.map((navItem) =>
            <a class="dropdown-item">
                <FontAwesomeIcon
                    key={"navIcon" + navItem.id}
                    icon={fa[navItem.iconName]} className="navIcons"
                    className="mdi mdi-settings text-primary drop-down-icon"
                />
                {navItem.navText}
            </a>
        )
        )
    }
}

export default DropDownNavItem;
import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as fa from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

class DropDownNavItem extends Component {

    render() {
        return (this.props.navData.map((navItem) =>
            <Link class="dropdown-item" to = '/'>
                <FontAwesomeIcon
                    key={"navIcon" + navItem.id}
                    icon={fa[navItem.iconName]} className="navIcons"
                    className="mdi mdi-settings text-primary drop-down-icon"
                />
                {navItem.navText}
            </Link>
        )
        )
    }
}

export default DropDownNavItem;
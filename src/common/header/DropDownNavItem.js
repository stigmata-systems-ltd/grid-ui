import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as fa from '@fortawesome/free-solid-svg-icons';
import { logout } from "../../utils/auth";
import { withRouter } from "react-router-dom";

class DropDownNavItem extends Component {

    getOnClickFunc = ({navText}) => {
        console.log("called",navText);
        if(navText === 'Logout') {
            logout(this.props);
        }
    }

    render() {
        return (this.props.navData.map((navItem) =>
            <button class="dropdown-item" onClick={() => this.getOnClickFunc(navItem)}>
                <FontAwesomeIcon
                    key={"navIcon" + navItem.id}
                    icon={fa[navItem.iconName]}
                    className="navIcons mdi mdi-settings text-primary drop-down-icon"
                />
                {navItem.navText}
            </button>
        )
        )
    }
}

export default withRouter(DropDownNavItem);
import React, { Component } from "react";
import { metaDataHeaderDropDowNav } from "./utils";
import DropDownNavItem from "./DropDownNavItem";
import { PROFILE_TEMP } from "../../assets/images/index";
import FaIcon from "../FaIcon";
import { logout, getUserDetails } from "../../utils/auth";

class DropDownNav extends Component {

    constructor() {
        super();
        this.state = {
            isShowDropDown: false,
        }
    }

    handleDropDownShow = () => {
        this.setState({ isShowDropDown: !this.state.isShowDropDown });
    }
    hideDropDown = () => {
        this.setState({ isShowDropDown: false });
    }
    render() {
        return (
            <ul class="navbar-nav navbar-nav-right">
                <li class="nav-item nav-profile dropdown">
                    <a
                        onClick={this.handleDropDownShow}
                        onBlur={this.hideDropDown}
                        class="nav-link dropdown-toggle"
                    >
                        <FaIcon
                            iconName="faUser"
                            className="navIcons drop-down-icon"
                        />
                        {console.log(getUserDetails())}
                        <span class="nav-profile-name">{getUserDetails().username} Username</span>
                        <FaIcon
                            iconName="faAngleDown"
                            className="navIcons drop-down-icon"
                        />
                    </a>
                    <div
                        class=
                        {`dropdown-menu dropdown-menu-right navbar-dropdown ${this.state.isShowDropDown && "show"}`}
                    >
                        <DropDownNavItem navData={metaDataHeaderDropDowNav} />
                    </div>
                </li>
            </ul>
        )
    }
}

export default DropDownNav;
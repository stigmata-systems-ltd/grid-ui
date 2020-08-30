import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as fa from '@fortawesome/free-solid-svg-icons';
import { withRouter } from "react-router-dom";

class NavItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isSubNavOpen: false,

        }
    }
    renderSubNavs = (subNavs) => {
        return (subNavs.map((subNav) =>
            <div class={`collapse ${this.state.isSubNavOpen && "show"}`} id="ui-basic">
                <ul class="nav flex-column sub-menu">
                    <li class="nav-item sub-nav">
                        <a
                            class="nav-link"
                            onClick={() => this.handleSubMenuRedirect(subNav.route)}
                        >
                            {subNav.navText}
                        </a>
                    </li>
                </ul>
            </div>
        )
        )
    }
    handleSubMenuRedirect = (route) => {
        this.props.history.push(route)
    }
    handleSubMenuShow = (navItem) => {
        if (navItem.hasSubNav) {
            this.setState({ isSubNavOpen: !this.state.isSubNavOpen })
        } else {
            this.props.history.push(navItem.route)
        }
    }
    render() {
        return (
            this.props.navData.map((navItem) => (<li class="nav-item">
                <button
                    key={navItem.id}
                    class={`nav-link ${this.state.isSubNavOpen && "show"}`}
                    onClick={() => this.handleSubMenuShow(navItem)}
                >
                    <FontAwesomeIcon
                        key={"navIcon" + navItem.id}
                        icon={fa[navItem.iconName]} className="navIcons"
                    />
                    <span class="menu-title">{navItem.navText}</span>
                    {navItem.hasSubNav &&
                        (!this.state.isSubNavOpen ?
                            <FontAwesomeIcon icon={fa.faAngleRight} className="menu-arrow" /> :
                            <FontAwesomeIcon icon={fa.faAngleDown} className="menu-arrow" />)}
                </button>
                {navItem.hasSubNav && this.renderSubNavs(navItem.subNavs)}
            </li>)
            )
        )
    }
}

export default withRouter(NavItem);
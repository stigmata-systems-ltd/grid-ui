import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as fa from '@fortawesome/free-solid-svg-icons';

class NavItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isSubNavOpen: false,

        }
    }
    renderSubNavs = () => {
        return (
            <div class={`collapse ${this.state.isSubNavOpen && "show"}`} id="ui-basic">
                <ul class="nav flex-column sub-menu">
                    <li class="nav-item">
                        <a class="nav-link" href="../../pages/ui-features/buttons.html">Buttons</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../../pages/ui-features/typography.html">Typography</a>
                    </li>
                </ul>
            </div>
        )
    }
    handleSubMenuShow = () => {
        this.setState({ isSubNavOpen: !this.state.isSubNavOpen })
    }
    render() {
        return (
            this.props.navData.map((navItem) => (<li class="nav-item">
                <button
                    key={navItem.id}
                    class={`nav-link ${this.state.isSubNavOpen && "show"}`}
                    onClick={this.handleSubMenuShow}
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

export default NavItem;
import React, { Component } from "react";

class TabNavs extends Component {

    render() {
        return (
            <div class="dashboard-tabs custom-tabs">
                <ul class="nav nav-tabs px-4">
                    {this.props.navItems.map((nav) => {
                        return (
                            <li class="nav-item">
                                <a 
                                    class={`nav-link ${nav.isActive && "active"}`}
                                    onClick={() => this.props.onClick(nav.id)}
                                >
                                    {nav.navText}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default TabNavs;
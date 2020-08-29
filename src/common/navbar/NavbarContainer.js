import React, { Component } from "react";
import { metaDataNavbar } from "./utils";
import NavItem from "./NavItem";

class Navbar extends Component {

    render() {
        return (
            <nav class="sidebar sidebar-offcanvas" id="sidebar">
                <ul class="nav">
                    <NavItem navData={metaDataNavbar} />
                </ul>
            </nav>
        )
    }
}

export default Navbar;
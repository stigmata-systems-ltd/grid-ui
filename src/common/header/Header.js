import React, { Component } from "react";
import DropDownNav from "./DropDownNav";

class Header extends Component {

    render() {
        return (
            <nav class="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
                <div class="navbar-brand-wrapper d-flex justify-content-center">
                    <div class="navbar-brand-inner-wrapper d-flex justify-content-between align-items-center w-100">
                        {/* <a class="navbar-brand brand-logo" href="../../index.html">
                            <img src="../../images/logo.svg" alt="logo" /></a>
                        <a class="navbar-brand brand-logo-mini" href="../../index.html">
                            <img src="../../images/logo-mini.svg" alt="logo" />
                        </a> */}
                        <button class="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
                            <span class="mdi mdi-sort-variant"></span> Logo
                        </button>
                    </div>
                </div>
                <div class="navbar-menu-wrapper d-flex align-items-center justify-content-end">
                    <h4>Logo</h4>
                    <DropDownNav />
                </div>
            </nav>
        )
    }
}

export default Header;
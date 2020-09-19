import React, { Component } from "react";
import DropDownNav from "./DropDownNav";
import { LOGO } from "../../assets/images/index";
import { WithRouter, withRouter } from "react-router-dom";

class Header extends Component {

    render() {
        return (
            <nav class="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
                <div class="navbar-brand-wrapper d-flex justify-content-center">
                    <div class="navbar-brand-inner-wrapper d-flex justify-content-between align-items-center w-100">
                        <a class="navbar-brand brand-logo logo" href="#" onClick={(e) => {
                            e.preventDefault();
                            this.props.history.push("/dashboard")
                        }}>
                            <img src={LOGO} alt="logo" /></a>
                        <button class="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
                            <span class="mdi mdi-sort-variant"></span> 
                        </button>
                    </div>
                </div>
                <div class="navbar-menu-wrapper d-flex align-items-center justify-content-end">
                    <h4></h4>
                    <DropDownNav />
                </div>
            </nav>
        )
    }
}

export default withRouter(Header);
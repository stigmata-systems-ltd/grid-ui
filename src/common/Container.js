import React, { Component } from "react";
import Header from "./header/Header";
import Navbar from "./navbar/NavbarContainer";
class Container extends Component {

    render() {
        return (
            <div className="container-scroller">
                <Header />
                <div class="container-fluid page-body-wrapper">
                    <Navbar />
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Container;
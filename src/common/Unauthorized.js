import React, { Component } from "react";
import { LOGO } from "../assets/images/index";
import { withRouter } from "react-router-dom";

class Unauthorized extends Component {
    render() {
        return (
            <div class="container-fluid page-body-wrapper full-page-wrapper">
                <div class="content-wrapper d-flex align-items-center auth ">
                {/* lock-full-bg */}
                    <div class="row w-100">
                        <div class="col-lg-8 mx-auto">
                            <div class="auth-form-transparent text-left p-5 text-center">
                                <img src={LOGO} alt="logo" />
                                <label for="examplePassword1">
                                    You are not authorized to view this resource. If this is unexpected, please contact site admin to get access. </label>
                                <div class="mt-3 text-center">
                                    <a href="#" class="btn btn-warning"
                                        onClick={this.props.history.goBack}
                                    >Go Back</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Unauthorized);
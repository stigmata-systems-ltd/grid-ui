import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Img from '../assets/images/logo.jpg';



class Login extends Component {
    redirectToDashboard = (e) => {
        e.preventDefault();
        this.props.history.push("dashboard");
    }
    render() {
        return (

            <div className="container-scroller">
                <div class="container-fluid page-body-wrapper full-page-wrapper">
                    <div class="imgg d-flex align-items-center auth px-0" >
                        <div class="row w-100 mx-0">
                            <div class="col-lg-4 mx-auto">
                                <div class="auth-form-light text-left py-5 px-4 px-sm-5">
                                    <center>
                                        <div class="brand-logo">
                                            <img src={Img} alt="logo" />
                                        </div>
                                    </center>



                                    <form class="pt-3" >
                                        <div class="form-group">
                                            <i class="fa fa-user icon"></i>
                                            <input type="email" class="form-control form-control-lg" id="exampleInputEmail1" placeholder="Username" />
                                        </div>
                                        <div class="form-group">
                                            <i class="fa fa-key icon"></i>
                                            <input type="password" class="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password" />

                                        </div>
                                        <div class="mt-3">
                                            <a
                                                onClick={this.redirectToDashboard}
                                                class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" href="../../index.html">SIGN IN</a>
                                        </div>
                                        <div class="my-2 d-flex justify-content-between align-items-center">
                                            <div class="form-check">
                                                <label class="form-check-label text-muted">
                                                    <input type="checkbox" class="form-check-input" />
                                                                    Keep me signed in
                                                          <i class="input-helper"></i>
                                                </label>
                                            </div>
                                            <a href="#" class="auth-link text-black">Forgot password?</a>
                                        </div>
                                        {/* <div class="mb-2">
                                            <button type="button" class="btn btn-block btn-facebook auth-form-btn">
                                                <i class="mdi mdi-facebook mr-2"></i>Connect using facebook
                  </button>
                                        </div> */}

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Login);
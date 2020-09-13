import React, { Component } from "react";
import Button from "../common/forms/Button";
import { LOGO } from "../assets/images/index.js";


class Login extends Component {
  redirectToDashboard = (e) => {
    e.preventDefault();

    //this.props.history.push("dashboard");
  };
  render() {
    return (
      <div class="container-scroller">
        <div class="container-fluid page-body-wrapper full-page-wrapper">
          <div class="imgg d-flex align-items-center auth px-0">
            <div class="row w-100 mx-0">
              <div class="col-lg-4 mx-auto">
                <div class="auth-form-light text-left py-5 px-4 px-sm-5">
                  <div class="brand-logo">
                    <img src={LOGO} alt="logo" />
                  </div>
                  
                  <form class="pt-3">
                    <div class="form-group">
                    <i class="fa fa-user icon"></i>
                      <input
                        type="email"
                        class="form-control form-control-lg"
                        id="exampleInputEmail1"
                        placeholder="Username"
                        onChange={(e) => this.props.handleUsernameChange(e.target)}
                        value={this.props.auth.username}
                      />
                    </div>
                    <div class="form-group">
                    <i class="fa fa-key icon"></i>
                      <input
                        type="password"
                        class="form-control form-control-lg"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        onChange={(e) => this.props.handlePasswordChange(e.target)}
                        value={this.props.auth.password}
                      />
                    </div>
                    {this.props.auth.isLoginError &&
                      <p className="text-danger">{this.props.auth.loginMessage}</p>}
                    <div class="mt-3">
                      <Button
                        onClick={(e) => this.props.authenticateUser(e)}
                        btnType="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                        btnText="Sign In"
                      />
                    </div>
                    <div class="my-2 d-flex justify-content-between align-items-center">
                      <div class="form-check">
                        <label class="form-check-label text-muted">
                          <input type="checkbox" class="form-check-input" />
                          Keep me signed in
                          <i class="input-helper"></i>
                        </label>
                      </div>
                      <a href="#" class="auth-link text-black">
                        Forgot password?
                      </a>
                    </div>
                    {/* <div class="mb-2">
                                            <button type="button" class="btn btn-block btn-facebook auth-form-btn">
                                                <i class="mdi mdi-facebook mr-2"></i>Connect using facebook
                  </button>
                                        </div> */}
                    {/* <div class="text-center mt-4 font-weight-light">
                      Don't have an account?
                      <a href="register.html" class="text-primary">
                        Create
                      </a>
                    </div> */}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;

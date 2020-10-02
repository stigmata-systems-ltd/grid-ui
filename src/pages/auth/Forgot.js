import React, { Component } from "react";
import Button from "../../common/forms/Button";
import { LOGO } from "../../assets/images/index.js";
import Axios from "axios";
import config from "../../config";
import Joi from "joi-browser";
const schema = {
  email: Joi.string().required().email().label("Registered Email"),
};
class Forgot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      isMessage: false,
      message: "",
      msgType: "text-primary",
      showLoginView: false,
    };
  }
  handleEmailChange = (e) => {
    this.setState({ email: e.target.value, isMessage: false, });
  };
  onSubmit = () => {
      const data = {
          emailId: this.state.email
      }
    const validation = Joi.validate({ email: this.state.email }, schema, {
      abortEarly: false,
    });
    if (validation.error !== null) {
      this.setState({
        message: validation.error.details[0].message,
        isMessage: true,
        msgType: "text-danger",
      });
    } else {
      Axios.post(config.BASE_URL + "/api/Auth/forgotpassword", data)
        .then((res) => {
          this.setState({
            message: res.data.message,
            isMessage: true,
            email: "",
            msgType: "text-success",
            showLoginView: true,
          });
        })
        .catch((err) => {
          this.setState({
            message: err.response.data.message,
            isMessage: true,
            msgType: "text-danger",
          });
        });
    }
  };
  redirectToLogin = () => {
    this.props.history.push("login");
  }

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
                  {!this.state.showLoginView ?
                  (<form class="pt-3">
                    <div class="form-group">
                      <i class="fa fa-envelope icon"></i>
                      <input
                        type="email"
                        class="form-control form-control-lg"
                        id="exampleInputEmail1"
                        placeholder="Enter Registered Email"
                        onChange={(e) => this.handleEmailChange(e)}
                        value={this.state.email}
                      />
                    </div>
                    {this.state.isMessage && (
                      <p className={this.state.msgType}>{this.state.message}</p>
                    )}
                    <div class="row">
                      <Button
                        onClick={(e) => this.onSubmit(e)}
                        btnType="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn col-md-5"
                        btnText="Submit"
                      />
                      <div className="col-md-2"></div>
                      <Button
                        onClick={(e) => this.redirectToLogin(e)}
                        btnType="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn col-md-5 no-margin-top"
                        btnText="Back"
                      />
                    </div>
                  </form>) :
                  (
                    <>
                    {this.state.isMessage && (
                      <p className={this.state.msgType}>{this.state.message}</p>
                    )}
                    <div class="mt-3">
                      <Button
                        onClick={(e) => this.redirectToLogin(e)}
                        btnType="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                        btnText="Back To Login"
                      />
                    </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Forgot;

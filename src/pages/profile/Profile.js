import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { connect } from "react-redux";
import ContentLoader from "../../common/ContentLoader";
import FormContainer from "../../common/forms/FormContainer";
import FormRow from "../../common/forms/FormRow";
import TextInput from "../../common/forms/TextInput";
import AddLatLng from "../createGrid/AddLatLng";
import IconTextButton from "../../common/forms/IconTextButton";
import Button from "../../common/forms/Button";
import SimpleDropDown from "../../common/forms/SimpleDropDown";
import CheckBox from "../../common/forms/CheckBox";
import { addSubContractor } from "../../actions/subContractorActions";
import CustomAlert from "../../common/forms/customAlert";
import Loader from "../../common/Loader";
import Col6 from "../../common/forms/Col6";
import Divider from "../../common/Divider";

class SubContractor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showChangePwd: false,
    };
  }

  componentDidMount = () => {
    this.props.getProfileDetails();
    this.props.resetChangePwdForm();
  };

  render() {
    return (
      <>
        {this.props.user.isProfLoading && <Loader />}
        <ContentLoader>
          <FormContainer formTitle={"Profile Details"}>
            <div>
            {this.props.user.profileMessage ? (
                <CustomAlert
                  variant={this.props.user.profileVaraint}
                  message={this.props.user.profileMessage}
                />
              ) : null}
            </div>
            <FormRow>
              <Col6 size="col-md-4">
                <h6>
                  Name:{" "}
                  <span className="font-weight-bold">
                    {this.props.userDetails &&
                      `${this.props.userDetails.firstName} ${this.props.userDetails.lastName}`}
                  </span>
                </h6>
              </Col6>
              <Col6 size="col-md-4">
                <h6>
                  Email:{" "}
                  <span className="font-weight-bold">
                    {this.props.userDetails &&
                      `${this.props.userDetails.email}`}
                  </span>
                </h6>
              </Col6>
              <Col6 size="col-md-4">
                <Button
                  btnText="Change Password"
                  btnType="btn-link"
                  onClick={() =>
                    this.setState({
                      showChangePwd: !this.state.showChangePwd,
                    })
                  }
                />
              </Col6>
            </FormRow>
            <Divider height="2" />
            <FormRow>
              <Col6 size="col-md-4">
                <h6>
                  Username:{" "}
                  <span className="font-weight-bold">
                    {this.props.userDetails &&
                      `${this.props.userDetails.userName}`}
                  </span>
                </h6>
              </Col6>
              <Col6 size="col-md-4">
                <h6>
                  Phone:{" "}
                  <span className="font-weight-bold">
                    {this.props.userDetails &&
                      `${this.props.userDetails.mobileNo}`}
                  </span>
                </h6>
              </Col6>
            </FormRow>
            <Divider height="2" />
            {this.state.showChangePwd && (
              <>
                <FormRow>
                  <TextInput
                    label="Current Password"
                    name="subName"
                    id="subName"
                    onChange={(e) =>
                      this.props.handleCurrentPwd(e.target.value)
                    }
                    value={this.props.user.currentPwd}
                    labelSize="col-md-4"
                    fieldSize="col-md-8"
                  />
                </FormRow>
                <FormRow>
                  <TextInput
                    label="New Password"
                    name="subCode"
                    id="subCode"
                    onChange={(e) =>
                      this.props.handleNewPwd(e.target.value)
                    }
                    value={this.props.user.newPwd}
                    labelSize="col-md-4"
                    fieldSize="col-md-8"
                  />
                </FormRow>
                {this.props.isProfileValidation !== "" &&
                    <p>{this.props.isProfileValidation}</p>
                }
                <FormRow>
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-4"></div>
                      <div className="col-md-8">
                        <Button
                          btnText="Save"
                          btnType="primary"
                          onClick={this.props.savePwd}
                        />
                        <Button
                          btnText="Cancel"
                          btnType="btn-link"
                          onClick={() =>
                            this.setState({
                              showChangePwd: !this.state.showChangePwd,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>
                </FormRow>
              </>
            )}
          </FormContainer>
        </ContentLoader>
      </>
    );
  }
}

export default SubContractor;

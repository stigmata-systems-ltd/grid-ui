import React, { Component } from "react";
import ContentLoader from "../../common/ContentLoader";
import FormContainer from "../../common/forms/FormContainer";
import Cleaning from "./Cleaning";
class GridDPR extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isCleaning: false,
        }
    }
    handleCleaning = (val) => {
        this.setState({ isCleaning: val });
    }
    render() {
        return (
            <ContentLoader>
                <FormContainer formTitle={"Grid Daily Progress"} >
                    <form class="form-sample">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label">Grid Number</label>
                                    <div class="col-sm-9">
                                        <select class="form-control">
                                            <option>Grid-1</option>
                                            <option>Grid-2</option>
                                            <option>Grid-3</option>
                                            <option>Grid-4</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label">Layer Number</label>
                                    <div class="col-sm-9">
                                        <select class="form-control">
                                            <option>Layer-1</option>
                                            <option>Layer-2</option>
                                            <option>Layer-3</option>
                                            <option>Layer-4</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label">
                                        Cleaning and Grubbing Finished
                                                </label>
                                    <div class="col-sm-2">
                                        <div class="form-check">
                                            <label class="form-check-label">
                                                <input type="radio"
                                                    onClick={() => this.handleCleaning(false)}
                                                    class="form-check-input" name="membershipRadios" id="membershipRadios2" value="option2"
                                                />
                                                                                Yes
                              <i class="input-helper"></i></label>
                                        </div>
                                    </div>
                                    <div class="col-sm-2">
                                        <div class="form-check">
                                            <label class="form-check-label">
                                                <input type="radio"
                                                    onClick={() => this.handleCleaning(false)}
                                                    class="form-check-input"
                                                    name="membershipRadios" id="membershipRadios2" value="option2" />
                                                                                No
                              <i class="input-helper"></i></label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {!this.state.isCleaning && <Cleaning />}
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label">City</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label">Country</label>
                                    <div class="col-sm-9">
                                        <select class="form-control">
                                            <option>America</option>
                                            <option>Italy</option>
                                            <option>Russia</option>
                                            <option>Britain</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </FormContainer >
            </ContentLoader >
        )
    }
}

export default GridDPR;
import React, { Component } from "react";

class FormContainer extends Component {

    render() {
        return (
            <div class="row">
                <div class="col-12 grid-margin">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">{this.props.formTitle}</h4>
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FormContainer;
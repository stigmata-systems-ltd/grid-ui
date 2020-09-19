import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import IconButton from "../../common/forms/IconButton";
import Button from "../../common/forms/Button";
import LayerDPRViewModel from "../../common/LayerDPRViewModel";
import FormRow from "../../common/forms/FormRow";
import TextInput from "../../common/forms/TextInput";
import LayerDPRViewDataTable from "../../common/LayerDPRViewDataTable";


class PlaningManagerDataTable extends Component {
    constructor() {
        super();
        this.state = {
            showLayerViewModal: false,
        };
    }
    renderTableHeaders = () => {
        return this.props.metaData.map((header) => <th>{header}</th>);
    };

    redirectToEditGrid = () => {
        this.props.history.push('/griddpr')
    }

    handleLayerViewModalClose = () => {
        this.setState({ showLayerViewModal: false });
    };
    showLayerViewModal = () => {
        this.setState({ showLayerViewModal: true });
    };

    render() {

        return (
            <div class="table-responsive pt-3 data-table">
                <table class="table dataTable no-footer">
                    <thead>
                        <tr>{this.renderTableHeaders()}</tr>
                    </thead>
                    <tbody>
                        {this.props.bodyData.length > 0 ? (
                            this.props.bodyData.map((data, rowIndex) => {
                                return (
                                    <tr>
                                        {Object.keys(data).map((key) => (
                                            <>
                                                <td> {data[key].toString()}</td>
                                            </>
                                        ))}

                                        <td>
                                            {this.props.showView && (
                                                <Button
                                                    btnText="View"
                                                    btnType="btn-secondary"
                                                    onClick={this.showLayerViewModal}
                                                />
                                            )}
                                            {this.props.showEdit && (
                                                <Button
                                                    btnText="Edit"
                                                    btnType="primary"
                                                    onClick={this.redirectToEditGrid}
                                                />
                                            )}
                                            {this.props.showApprove && (
                                                <Button
                                                    btnText="Approve"
                                                    btnType="btn-success"

                                                />
                                            )}

                                        </td>
                                    </tr>
                                );
                            })
                        ) : (
                                <tr>
                                    <td>
                                        <h6 className="text-info">No Records Found</h6>
                                    </td>
                                </tr>
                            )}
                    </tbody>
                </table>
                <LayerDPRViewModel
                    showModal={this.state.showLayerViewModal}
                    handleClose={this.handleLayerViewModalClose}
                    size="lg"
                    title="View Layer DPR Details"
                >

                    <FormRow>
                        <TextInput label="Grid Number" />
                        <TextInput label="Layer Number" />
                    </FormRow>
                    <FormRow>
                        <TextInput label="Date of Filing" />
                        <TextInput label="Area Of Layer (Sqm)" />
                    </FormRow>
                    <FormRow>
                        <TextInput label="Top Level Fill Metrials" />
                        <TextInput label="Meterial Description" />
                    </FormRow>
                    <FormRow>
                        <LayerDPRViewDataTable />

                    </FormRow>
                </LayerDPRViewModel>
            </div>
        );
    }
}

export default withRouter(PlaningManagerDataTable);

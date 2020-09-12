import React, { Component } from 'react';
import FormContainer from '../../common/forms/FormContainer';
import FormRow from '../../common/forms/FormRow';
import { _subContractorMetaData, _subContractorrBodyData } from './utils';
import ContentLoader from '../../common/ContentLoader';
import IconTextButton from '../../common/forms/IconTextButton';
import { Modal } from 'react-bootstrap';
import SubContractor from './SubContractor';
import AddSubContractor from './AddSubContractor';
import DataTable from "../../common/DataTable";


class ViewSubContractor extends Component {
    constructor() {
        super();
        this.state = {
            showAddSubContractorModal: false,
        };
    }

    handleAddSubContractorModalClose = () => {
        this.setState({ showAddSubContractorModal: false });
    };
    showAddSubContractorModal = () => {
        this.setState({ showAddSubContractorModal: true });
    };

    render() {
        return (

            <ContentLoader>
                <FormContainer formTitle={'Sub-Contractor Details'}>
                    <FormRow>
                        <AddSubContractor
                            {...this.props}
                        />
                        <DataTable
                            metaData={_subContractorMetaData}
                            bodyData={_subContractorrBodyData}
                            isShowEdit={true}
                            isShowDelete={true}
                        />
                    </FormRow>
                </FormContainer>

               
            </ContentLoader>


        );
    }
}

export default ViewSubContractor;

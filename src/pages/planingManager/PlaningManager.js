import React, { Component } from 'react';
import ContentLoader from '../../common/ContentLoader';
import FormContainer from '../../common/forms/FormContainer';
import FormRow from '../../common/forms/FormRow';

import {
    _planningManagerMetaData,_planningManagerbodyData
} from './utils';
import PlaningManagerDataTable from './PlaningManagerDataTable';


class PlaningManager extends Component {
    render() {
        return (
            <ContentLoader>
                <FormContainer formTitle={'Planning Manager'}>
                    <FormRow>

                        <PlaningManagerDataTable
                            metaData={_planningManagerMetaData}
                            bodyData={_planningManagerbodyData}
                            showView
                            showEdit
                            showApprove
                            

                        />
                    </FormRow>

                </FormContainer>
            </ContentLoader>
        );
    }
}

export default PlaningManager;

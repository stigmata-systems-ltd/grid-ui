import React, { Component } from 'react';
import ContentLoader from '../../common/ContentLoader';
import FormContainer from '../../common/forms/FormContainer';
import FormRow from '../../common/forms/FormRow';

import {
    _subContractorReportMetaData, _subContractorReportbodyData
} from './utils';
import DataTable from '../../common/DataTable';
import DateFilter from './DateFilter';

class SubContractorReport extends Component {
    render() {
        return (
            <ContentLoader>
                <FormContainer formTitle={'Sub-Contractor Report'}>
                    <DateFilter />
                    <FormRow>
                        <DataTable
                            metaData={_subContractorReportMetaData}
                            bodyData={_subContractorReportbodyData}

                        />
                    </FormRow>

                </FormContainer>
            </ContentLoader>
        );
    }
}

export default SubContractorReport;

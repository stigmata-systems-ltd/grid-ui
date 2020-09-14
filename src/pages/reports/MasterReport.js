import React, { Component } from 'react';
import ContentLoader from '../../common/ContentLoader';
import FormContainer from '../../common/forms/FormContainer';
import FormRow from '../../common/forms/FormRow';

import {
    _masterReportMetaData, _masterReportbodyData
} from './utils';
import DataTable from '../../common/DataTable';
import DownloadToExcelButton from '../../common/forms/DownloadToExcelButton';
import DateFilter from './DateFilter';

class MasterReport extends Component {
    render() {
        return (
            <ContentLoader>
                <FormContainer formTitle={'Master Report'}>
                    <DateFilter />
                    
                    <FormRow>

                        <DataTable
                            metaData={_masterReportMetaData}
                            bodyData={_masterReportbodyData}

                        />
                    </FormRow>

                </FormContainer>
            </ContentLoader>
        );
    }
}

export default MasterReport;

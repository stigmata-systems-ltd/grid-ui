import React, { Component } from 'react';
import ContentLoader from '../../common/ContentLoader';
import GridDetailsDataTable from '../../common/GridDetailsDataTable';

import FormContainer from '../../common/forms/FormContainer';
import FormRow from '../../common/forms/FormRow';
import { getGridRFILevelVerificationDetails, getGridRFICompactionTestingDetails } from "../../container/grid/dataTransformer";
import { _layerMetaData, _layerBodyData } from './utils';
import LayerDPRDetail from '../../common/LayerDPRDetail';


class LayerDPRDetails extends Component {


    render() {
        return (

            <FormContainer formTitle={'Layer DPR Details'}>
                <FormRow>

                    <LayerDPRDetail
                        metaData={_layerMetaData}
                        bodyData={_layerBodyData}
                    />
                </FormRow>
            </FormContainer>

        );
    }
}

export default LayerDPRDetails;

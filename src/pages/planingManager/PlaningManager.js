import React, { Component } from 'react';
import ContentLoader from '../../common/ContentLoader';
import FormContainer from '../../common/forms/FormContainer';
import FormRow from '../../common/forms/FormRow';
import CustomDataTable from '../../common/CustomDataTable';
import CustomAlert from '../../common/forms/customAlert';
import { _planningManagerMetaData, transformLayerData } from './utils';
import PlaningManagerDataTable from './PlaningManagerDataTable';

class PlaningManager extends Component {
  componentDidMount() {
    this.props.fetchLayerData();
  }
  render() {
    return (
      <ContentLoader>
        <FormContainer formTitle={'Planning Manager'}>
          <div>
            {this.props.pm.approveLayer.message ? (
              <CustomAlert
                variant={this.props.pm.approveLayer.variant}
                message={this.props.pm.approveLayer.message}
              />
            ) : null}
          </div>
          <FormRow>
            <CustomDataTable
              metaData={_planningManagerMetaData(
                id => this.props.approveLayer(id),
                id => this.props.editLayer(id)
              )}
              bodyData={transformLayerData(this.props.pm.layerList)}
              pagination={true}
              paginationTotalRows={
                this.props.pm.layerList && this.props.pm.layerList.length
              }
              paginationPerPage={5}
              noHeader={true}
            />
          </FormRow>
        </FormContainer>
      </ContentLoader>
    );
  }
}

export default PlaningManager;

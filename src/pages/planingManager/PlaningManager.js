import React, { Component } from 'react';
import ContentLoader from '../../common/ContentLoader';
import FormContainer from '../../common/forms/FormContainer';
import FormRow from '../../common/forms/FormRow';
import CustomDataTable from '../../common/CustomDataTable';
import CustomAlert from '../../common/forms/customAlert';
import { _planningManagerMetaData, transformLayerData } from './utils';
import PlaningManagerDataTable from './PlaningManagerDataTable';
import Col6 from '../../common/forms/Col6';
import Button from '../../common/forms/Button';
import ViewPMContainer from '../../container/planningManager/ViewPMContainer';
class PlaningManager extends Component {
  componentDidMount() {
    this.props.fetchLayerData();
  }
  render() {
    console.log(`show view: ${this.props.pm.showPMViewModal}`);
    return (
      <ContentLoader>
        <ViewPMContainer showPMViewModal={this.props.pm.showPMViewModal} />
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
                id => this.props.editLayer(id),
                id => this.props.viewLayer(id)
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

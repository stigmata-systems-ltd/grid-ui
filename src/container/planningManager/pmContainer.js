import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PlaningManager from '../../pages/planingManager/PlaningManager';
import store from '../../store';
import {
  fetchLayerData,
  approveLayer,
} from '../../actions/planningManagerActions';
import { getSingleLayerDetails } from '../../actions/gridActions';
import {
  ADD_SUBCONTRACTOR,
  SUBCONTRACTOR_NAME,
  SUBCONTRACTOR_CODE,
  SUBCONTRACTOR_CONTACT_PERSON,
  SUBCONTRACTOR_CONTACT_ADDRESS,
  SUBCONTRACTOR_PHONE,
  SUBCONTRACTOR_EMAIL,
  RESET_SUBCONTRACTOR_FORM,
  SHOW_PM_VIEW_MODEL,
  DPR_GRID_NO_CHANGE,
  LAYER_NO,
} from '../../actions/types';
import { propTypes } from 'react-bootstrap/esm/Image';

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchLayerData() {
      dispatch(fetchLayerData());
    },
    approveLayer(id) {
      console.log(`Approved Layer is: ${id}`);
      dispatch(approveLayer(id));
    },
    viewLayer(id) {
      console.log(`ViewLayer ID is: ${id}`);
      const pm = store.getState().pm;

      dispatch({
        type: SHOW_PM_VIEW_MODEL,
        payload: true,
      });
    },
    editLayer(id) {
      console.log(`EditLayer ID is: ${id}`);
      const pm = store.getState().pm;
      console.log(`ID: ${id}`);
      const result = pm.layerList.filter(res => res.layerDtlsId === id);
      console.log(`Result: ${JSON.stringify(result)}`);
      dispatch({
        type: DPR_GRID_NO_CHANGE,
        payload: { value: result[0].gridId, label: result[0].gridNo },
      });

      dispatch({
        type: LAYER_NO,
        payload: { value: result[0].layerId, label: result[0].layerNo },
      });
      const grid = store.getState().grid;
      const currentLayer = parseInt(grid.layerNo.value);
      const currentGrid = parseInt(grid.dprGridNum.value);
      dispatch(getSingleLayerDetails(currentLayer, currentGrid));
    },
  };
};

const mapStateToProps = state => {
  const pm = store.getState().pm;
  const grid = store.getState().grid;
  return {
    pm,
    grid,
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PlaningManager)
);

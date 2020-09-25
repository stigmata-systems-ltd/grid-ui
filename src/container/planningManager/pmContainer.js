import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PlaningManager from '../../pages/planingManager/PlaningManager';
import store from '../../store';
import {
  fetchLayerData,
  approveLayer,
} from '../../actions/planningManagerActions';
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

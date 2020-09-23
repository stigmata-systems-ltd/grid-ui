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
  };
};

const mapStateToProps = state => {
  const pm = store.getState().pm;
  return {
    pm,
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PlaningManager)
);

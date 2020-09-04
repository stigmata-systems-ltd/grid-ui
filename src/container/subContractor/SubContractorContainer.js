import { connect } from 'react-redux';
import SubContractor from '../../pages/subContractor/SubContractor';
import store from '../../store';
import { addSubContractor } from '../../actions/subContractorActions';
import { ADD_SUBCONTRACTOR, SUBCONTRACTOR_NAME } from '../../actions/types';

const mapDispatchToProps = dispatch => {
  console.log('dispatcher');
  return {
    saveSubContractorData() {
      dispatch(addSubContractor());
    },

    handleChangeSubName(value) {
      console.log(value);
      dispatch({
        type: SUBCONTRACTOR_NAME,
        payload: value,
      });
    },
  };
};

const mapStateToProps = state => {
  const scr = store.getState().scr;
  console.log(scr);
  return {
    subContractorName: scr.subContractorName,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SubContractor);

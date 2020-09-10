import { connect } from 'react-redux';
import GridDetails from '../../pages/gridDetails/GridDetails';
import store from '../../store';
import { layerList } from '../../actions/gridDetailsAction';

const mapDispatchToProps = dispatch => {
  console.log('dispatcher');
  return {
    fetchRfiLevelVerificationData() {
      dispatch(layerList());
    },
  };
};


const mapStateToProps = state => {
    const gridDetails = store.getState().gridDetails;
    // console.log(`Grid State: ${JSON.stringify(gridDetails)}`);
    // gridDetails.gridRfiLevelData.map(function(e, i) {
    //   e.layerDtlsId = i + 1;
    // });
    console.log(`Grid RFI Level Verification: ${gridDetails}`);
    return {
      gridDetails,
    };
  };

export default connect(mapStateToProps,mapDispatchToProps)(GridDetails);

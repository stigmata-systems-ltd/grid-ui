import { connect } from 'react-redux';
import GridDPR from '../../pages/gridDPR/GridDPR';
import store from '../../store';
import { gridNoList, addCGData } from '../../actions/gridActions';

import ClientBilling from '../../pages/clientBilling/ClientBilling';

const mapDispatchToProps = dispatch => {
    console.log('Grid DPR dispatcher');
    return {
        fetchGridNoDataForClientBilling() {
            dispatch(gridNoList());
        },

    };
};

const mapStateToProps = state => {
    const grid = store.getState().grid;
    console.log(`Grid DPR State: ${JSON.stringify(grid)}`);

    return {
        grid,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ClientBilling);

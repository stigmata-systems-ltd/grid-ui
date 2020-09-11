import { connect } from 'react-redux';
import ClientBilling from '../../pages/clientBilling/ClientBilling';
import store from '../../store';
import {
    gridNoList,

} from '../../actions/gridActions';



const mapDispatchToProps = dispatch => {
    console.log('Grid DPR dispatcher');
    return {
        fetchGridNoData() {
            dispatch(gridNoList());
        },


    };
};

const mapStateToProps = state => {
    const grid = store.getState().grid;
    return {
        grid,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ClientBilling);

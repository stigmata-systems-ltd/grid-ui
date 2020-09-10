
import axios from 'axios';
import Cookie from 'js-cookie';
import config from '../config';
import { CLIENTBILLING_REQUEST,  CLIENTBILLING_SUCCESS,CLIENTBILLING_FAILURE} from './types';



const clientBillingAction = (billingMonth,ipcNo,billingLayerGrid) => async (dispatch) => {

    dispatch({type : CLIENTBILLING_REQUEST , payload : {billingMonth,ipcNo,billingLayerGrid}});

    try{

        const {data} = await axios.post(config.BASE_URL +"/api/Client/CreateClientBilling" , {billingMonth,ipcNo,billingLayerGrid});
        dispatch({type : CLIENTBILLING_SUCCESS, payload : data});
        Cookie.set("userInfo" ,JSON.stringify(data));


    }catch(error) {

        dispatch({type : CLIENTBILLING_FAILURE, payload : error.message});
    }
     
}

export {clientBillingAction}
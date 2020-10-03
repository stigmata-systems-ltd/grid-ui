import { LIST_LAYER_PM, APPROVE_LAYER_PM } from './types';
import store from '../store';
import axios from 'axios';
import config from '../config';

export const fetchLayerData = () => {
  return {
    type: LIST_LAYER_PM,
    payload: axios.get(
      config.BASE_URL +
        '/api/Layer/LayerList?isApproved=false&layerStatus=Completed&isBillGenerated=false'
    ),
  };
};
export const approveLayer = id => {
  return {
    type: APPROVE_LAYER_PM,
    payload: axios.post(
      config.BASE_URL + '/api/Layer/ApproveLayer?layerDtlsId=' + id,
      ''
    ),
  };
};

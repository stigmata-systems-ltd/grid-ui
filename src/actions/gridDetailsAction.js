import { RFI_LEVEL_VERIFICATION } from './types';
import axios from 'axios';
import config from '../config';

console.log(`Config value ${JSON.stringify(config)}`);
export const layerList = () => {
  return {
    type: RFI_LEVEL_VERIFICATION,
    payload: axios.get(config.BASE_URL + '/api/Layer/LayerList'),
  };
};
import { LIST_ROLES } from './types';
import store from '../store';
import axios from 'axios';
import config from '../config';

export const fetchRoleData = () => {
  return {
    type: LIST_ROLES,
    payload: axios.get(config.BASE_URL + '/api/PageAccess/getroles'),
  };
};

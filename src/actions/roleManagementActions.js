import { LIST_ROLES, LIST_ROLES_ID, UPDATE_PAGE_ACCESS_ROLES } from './types';
import store from '../store';
import axios from 'axios';
import config from '../config';

export const fetchRoleData = () => {
  return {
    type: LIST_ROLES,
    payload: axios.get(config.BASE_URL + '/api/PageAccess/getroles'),
  };
};
export const updateRoles = () => {
  const listRoleDetailsID = store.getState().roles.listRoleDetailsID;
  const pageAccessDetails = {
    pageAccessDetails: listRoleDetailsID,
  };
  return {
    type: UPDATE_PAGE_ACCESS_ROLES,
    payload: axios.put(
      config.BASE_URL + '/api/PageAccess/updatepageaccess',
      pageAccessDetails
    ),
  };
};

export const editRole = i => {
  return {
    type: LIST_ROLES_ID,
    payload: axios.get(config.BASE_URL + '/api/PageAccess/getpageaccess/' + i),
  };
};

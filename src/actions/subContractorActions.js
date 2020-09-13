import {
  ADD_SUBCONTRACTOR,
  LIST_SUBCONTRACTOR,
  DELETE_SUBCONTRACTOR,
  EDIT_SUBCONTRACTOR_DETAILS,
  EDIT_SUBCONTRACTOR,
} from './types';
import store from '../store';
import axios from 'axios';
import config from '../config';

export const addSubContractor = () => {
  const {
    subContractorName,
    subContractorCode,
    subContractorContactPerson,
    subContractorContactAddres,
    subContractorPhone,
    subContractorEmail,
  } = store.getState().scr;

  const subContractorData = {
    name: subContractorName,
    code: subContractorCode,
    contact_person: subContractorContactPerson,
    contact_address: subContractorContactAddres,
    phone: subContractorPhone,
    email: subContractorEmail,
    user_id: 1,
  };
  return {
    type: ADD_SUBCONTRACTOR,
    payload: axios.post(
      config.BASE_URL + '/api/SubCont/AddSubcontractor',
      subContractorData
    ),
  };
};

export const fetchSubContractor = () => {
  return {
    type: LIST_SUBCONTRACTOR,
    payload: axios.get(config.BASE_URL + '/api/SubCont/GetSubContractorList'),
  };
};

export const deleteSCR = i => {
  const scr = store.getState().scr;
  console.log(`Selected SCR ID: ${scr.listSCR[i].subContrtactorId}`);
  const id = scr.listSCR[i].subContrtactorId;
  return {
    type: DELETE_SUBCONTRACTOR,
    payload: axios.delete(config.BASE_URL + '/api/SubCont/DeleteSubCont/' + id),
  };
};

export const editSCR = i => {
  const scr = store.getState().scr;
  console.log(`Selected SCR ID: ${scr.listSCR[i].subContrtactorId}`);
  const selectedSCR = scr.listSCRDetails[i];

  return {
    type: EDIT_SUBCONTRACTOR_DETAILS,
    payload: selectedSCR,
  };
};

export const updateSubContractor = () => {
  const {
    subContractorId,
    subContractorName,
    subContractorCode,
    subContractorContactPerson,
    subContractorContactAddres,
    subContractorPhone,
    subContractorEmail,
  } = store.getState().scr;
  const subContractorData = {
    name: subContractorName,
    code: subContractorCode,
    contact_person: subContractorContactPerson,
    contact_address: subContractorContactAddres,
    phone: subContractorPhone,
    email: subContractorEmail,
    user_id: 1,
  };
  return {
    type: EDIT_SUBCONTRACTOR,
    payload: axios.put(
      config.BASE_URL + '/api/SubCont/UpdateSubcontractor/' + subContractorId,
      subContractorData
    ),
  };
};

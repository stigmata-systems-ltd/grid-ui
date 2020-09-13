import { ADD_SUBCONTRACTOR, LIST_SUBCONTRACTOR } from './types';
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

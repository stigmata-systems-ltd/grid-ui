import { ADD_SUBCONTRACTOR } from './types';
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
    userId: 1,
  };
  return {
    type: ADD_SUBCONTRACTOR,
    payload: axios.post(
      config.BASE_URL + '/api/SubCont/AddSubcontractor',
      subContractorData
    ),
  };
};

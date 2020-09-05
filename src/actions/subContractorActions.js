import { ADD_SUBCONTRACTOR } from './types';
import store from '../store';
import axios from 'axios';

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
    userId: 0,
  };
  return {
    type: ADD_SUBCONTRACTOR,
    payload: axios.post(
      'http://127.0.0.1:4010/api/SubCont/AddSubcontractor',
      subContractorData
    ),
  };
};

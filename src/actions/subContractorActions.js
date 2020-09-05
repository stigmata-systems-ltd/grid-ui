import {
  ADD_SUBCONTRACTOR,
  SUBCONTRACTOR_NAME,
  SUBCONTRACTOR_CODE,
  SUBCONTRACTOR_CONTACT_PERSON,
  SUBCONTRACTOR_CONTACT_ADDRESS,
  SUBCONTRACTOR_PHONE,
  SUBCONTRACTOR_EMAIL,
} from './types';
import store from '../store';
import axios from 'axios';
// export const addSubContractor = () => dispatch => {
//   fetch('http://127.0.0.1:4010/api/SubCont/AddSubcontractor', {
//     method: 'POST',
//     headers: {
//       'content-type': 'application/json',
//     },
//     body: JSON.stringify(postData),
//   })
//     .then(res => res.json())
//     .then(post =>
//       dispatch({
//         type: ADD_SUBCONTRACTOR,
//         payload: post,
//       })
//     );
// };

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

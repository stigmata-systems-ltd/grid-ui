import { ADD_SUBCONTRACTOR } from './types';

export const addSubContractor = postData => dispatch => {
  fetch('http://127.0.0.1:4010/api/SubCont/AddSubcontractor', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(postData),
  })
    .then(res => res.json())
    .then(post =>
      dispatch({
        type: ADD_SUBCONTRACTOR,
        payload: post,
      })
    );
};

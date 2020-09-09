import { ADD_USER } from './types';
import store from '../store';
import axios from 'axios';
import config from '../config';

export const createUser = () => {
  const {
    firstName,
    lastName,
    email,
    mobileNo,
    userName,
    password,
    roleName,
  } = store.getState().user;

  const addUser = {
    firstName,
    lastName,
    email,
    mobileNo,
    userName,
    password,
    roleId: 1,
    isActive: true,
    createdBy: 1,
    updatedBy: 1,
  };
  return {
    type: ADD_USER,
    payload: axios.post(config.BASE_URL + '/api/User/adduser', addUser, {
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjEiLCJuYmYiOjE1OTk2NDgxNTIsImV4cCI6MTU5OTczNDU1MiwiaWF0IjoxNTk5NjQ4MTUyfQ.JKvWmZizYhXXFLP8XJr4mdSAM4fWZeq0kFE8AdfJ2RQ',
      },
    }),
  };
};

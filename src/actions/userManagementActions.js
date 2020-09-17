import store from "../store";
import axios from "axios";
import config from "../config";
import { ADD_USER, GET_USER_ROLES, GET_USERS, DELETE_USER } from "./types";

export const createUser = () => {
  const {
    firstName,
    lastName,
    email,
    mobileNo,
    userName,
    roleName,
  } = store.getState().user;

  const addUser = {
    firstName,
    lastName,
    email,
    mobileNo,
    userName,
    roleId: roleName,
    isActive: true,
    createdBy: "1",
  };
  return {
    type: ADD_USER,
    payload: axios.post(config.BASE_URL + "/api/User/adduser", addUser),
  };
};

export const getUserRoles = () => {
  return {
    type: GET_USER_ROLES,
    payload: axios.get(config.BASE_URL + "/api/PageAccess/getroles"),
  };
};

export const getUsers = () => {
  return {
    type: GET_USERS,
    payload: axios.get(config.BASE_URL + "/api/User/getuser"),
  };
};

export const deleteUsers = (userId) => {
  return {
    type: DELETE_USER,
    payload: axios.delete(config.BASE_URL + "/api/User/deleteuser/"+userId),
  };
}

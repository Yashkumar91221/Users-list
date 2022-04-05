const GET_USERS_REQUEST = "GET_USERS_REQUEST";
const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
const DELETE_USER_REQUEST = "DELETE_USER_REQUEST";
const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
const CREATE_USER_REQUEST = "CREATE_USER_REQUEST";
const USERS_ERROR = "USERS_ERROR";

const actionTypes = {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  CREATE_USER_REQUEST,
  USERS_ERROR,
};

export const get_users_request = () => {
  return { type: GET_USERS_REQUEST };
};

export const get_users_success = (users) => {
  return { type: GET_USERS_SUCCESS, payload: users };
};

export const delete_user_request = (userId) => {
  return { type: DELETE_USER_REQUEST, payload: userId };
};

export const delete_user_success = (userId) => {
  return { type: DELETE_USER_SUCCESS, payload: userId };
};

export const create_user_request = ({ firstName, lastName }) => {
  return { type: CREATE_USER_REQUEST, payload: { firstName, lastName } };
};

export const usersError = ({ error }) => {
  return { type: USERS_ERROR, payload: error };
};

export const errorReset = () => {
  return { type: USERS_ERROR, payload: "" };
};
export default actionTypes;

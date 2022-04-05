import axios from "axios";
import { v4 as uuid } from "uuid";

export const getUsersRequest = () => {
  return axios.get("/users");
};

export const deleteUserRequest = (userId) => {
  return axios.delete(`/users/${userId}`);
};

export const createUserRequest = (payload) => {
  return axios.post("/users", {
    id: uuid(),
    firstName: payload.firstName,
    lastName: payload.lastName,
  });
};

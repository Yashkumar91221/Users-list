import "./App.css";
import React, { useEffect } from "react";
import NewUserForm from "./components/NewUserForm";
import UserList from "./components/UserList";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "reactstrap";
import {
  create_user_request,
  delete_user_request,
  errorReset,
  get_users_request,
} from "./actions/users";

const App = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_users_request());
  }, [dispatch]);

  const handleCreateUserSubmit = ({ firstName, lastName }) => {
    dispatch(
      create_user_request({
        firstName,
        lastName,
      })
    );
  };

  const handleDeleteUserClick = (userId) => {
    dispatch(delete_user_request(userId));
  };

  const handleCloseAlert = () => {
    dispatch(errorReset());
  };

  return (
    <div style={{ margin: "0 auto", padding: "20px", maxWidth: "600px" }}>
      <h2>Users</h2>
      <Alert color="danger" isOpen={!!users.error} toggle={handleCloseAlert}>
        {users.error}
      </Alert>
      <NewUserForm onSubmit={handleCreateUserSubmit} />
      {!!users.users && !!users.users.length && (
        <UserList
          onDeleteUserClick={handleDeleteUserClick}
          users={users.users}
        />
      )}
    </div>
  );
};

export default App;

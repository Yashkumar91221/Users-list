import actionTypes from "../actions/users";

const initialState = { users: [], error: "" };

const usersReducer = (state = initialState, action) => {
  let newUsers = state.users;
  switch (action.type) {
    case actionTypes.GET_USERS_SUCCESS:
      return { ...state, users: action.payload };
    case actionTypes.DELETE_USER_SUCCESS:
      newUsers = newUsers.filter((user) => user.id !== action.payload);
      return { ...state, users: newUsers };
    case actionTypes.USERS_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
export default usersReducer;

import { put, call, takeEvery, takeLatest, fork } from "redux-saga/effects";
import actionTypes from "../actions/users";
import * as api from "../api";
import * as actions from "../actions/users";

function* getUsersSaga() {
  try {
    const { data } = yield call(api.getUsersRequest);
    yield put(actions.get_users_success(data));
  } catch (error) {
    console.log("error occurred", error);
    yield put(
      actions.usersError({
        error: "An error occurred. Failed to fetch the users.",
      })
    );
  }
}

function* watchGetUsersRequest() {
  yield takeEvery(actionTypes.GET_USERS_REQUEST, getUsersSaga);
}

function* deleteUserSaga({ payload }) {
  try {
    yield call(api.deleteUserRequest, payload);
    yield put(actions.delete_user_success(payload));
  } catch (error) {
    yield put(
      actions.usersError({
        error: "An error occurred. Failed to delete the user.",
      })
    );
  }
}

function* watchDeleteUserRequest() {
  //   while (true) {
  yield takeLatest(actionTypes.DELETE_USER_REQUEST, deleteUserSaga);
  // const { payload } = yield take(actionTypes.DELETE_USER_REQUEST);
  // yield call(deleteUserSaga, payload);
  //   }
}

function* createUserSaga({ payload }) {
  try {
    yield call(api.createUserRequest, payload);
    yield put(actions.get_users_request());
  } catch (error) {
    yield put(
      actions.usersError({
        error: "An error occurred. Failed to create the user.",
      })
    );
  }
}

function* watchCreateUserRequest() {
  yield takeLatest(actionTypes.CREATE_USER_REQUEST, createUserSaga);
}

const userSagas = [
  fork(watchGetUsersRequest),
  fork(watchDeleteUserRequest),
  fork(watchCreateUserRequest),
];
export default userSagas;

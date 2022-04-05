import { all } from "redux-saga/effects";
import userSagas from "./usersSaga";

function* rootSaga() {
  yield all([...userSagas]);
}

export default rootSaga;

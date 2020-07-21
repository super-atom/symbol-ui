import { call, select, put, takeLatest } from 'redux-saga/effects';
import { profileAction, profileSelector } from './slice';
import { getProfiles } from 'apis/symbol/profile';

export function* fetchDataSaga() {
  const { fetchDataSuccess, fetchDataFail } = profileAction;
  try {
    const options = yield select(profileSelector.options);
    const profiles = yield call(getProfiles, options);

    yield put(fetchDataSuccess({
      profiles,
      options
    }));
  } catch (err) {
    yield put(fetchDataFail(err));
  }
}

export function* watchProfile() {
  const { load, loadMore, changeOptions, changeOptionPage } = profileAction;

  yield takeLatest(load, fetchDataSaga);
  yield takeLatest(loadMore, fetchDataSaga);
  yield takeLatest(changeOptions, fetchDataSaga);
  yield takeLatest(changeOptionPage, fetchDataSaga);
}
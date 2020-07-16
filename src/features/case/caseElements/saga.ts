import { call, select, put, takeLatest } from 'redux-saga/effects';
import { caseElementsAction, caseElementsSelector } from './slice';
import getCaseElements, { getCaseElementsQuery } from 'api/symbol/getCaseElements';

function* fetchDataSaga() {
  const { fetchDataSuccess, fetchDataFail } = caseElementsAction;
  try {
    const options = yield select(caseElementsSelector.options);
    const caseElements = yield call(getCaseElementsQuery, options);

    yield put(fetchDataSuccess({
      caseElements
    }));
  } catch (err) {
    yield put(fetchDataFail(err));
  }
}

function* fetchDataOnceSaga() {
  const { fetchDataSuccess, fetchDataFail } = caseElementsAction;
  try {
    const options = yield select(caseElementsSelector.options);
    const caseElements = yield call(getCaseElements, options);

    yield put(fetchDataSuccess({
      caseElements
    }));
  } catch (err) {
    yield put(fetchDataFail(err));
  }
}

export function* watchCaseElements() {
  const { load, changeOptions } = caseElementsAction;

  yield takeLatest(load, fetchDataOnceSaga);
  // yield takeLatest(changeOptions, fetchDataSaga);
}
import { call, takeEvery, put } from 'redux-saga/effects';
import Axios from 'axios';
import { fetchData } from './reducer';

export const sagaActions = {
  FETCH_DATA_SAGA: 'FETCH_DATA_SAGA',
};

export function* fetchDataSaga() {
  try {
    let result = yield call(() =>
      Axios({ url: 'https://5ce2c23be3ced20014d35e3d.mockapi.io/api/todos' }),
    );
    yield put(fetchData(result.data));
  } catch (e) {
    yield put({ type: 'TODO_FETCH_FAILED' });
  }
}

export default function* rootSaga() {
  yield takeEvery(sagaActions.FETCH_DATA_SAGA, fetchDataSaga);
}

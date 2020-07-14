import { put, select, takeLatest, delay } from 'redux-saga/effects';
import { counterAction, counterSelector } from './slice';

export function* incrementByAmountAsyncTest() {
  const { incrementByAmountSuccess, incrementByAmountFail } = counterAction;
  const state = yield select(counterSelector.all);

  try {
    const nextMessage = '성공';
    yield delay(1000);
    yield put(
      incrementByAmountSuccess({
        value: state.value + 2,
        message: nextMessage
      })
    );
  } catch (err) {
    yield put(incrementByAmountFail(err));
  }
}

export function* watchCount() {
  const { incrementByAmountAsync } = counterAction;

  yield takeLatest(incrementByAmountAsync, incrementByAmountAsyncTest);
}

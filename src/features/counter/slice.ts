import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';

const name = 'counter';

interface CounterState {
  value: number;
  error: any;
  message: string;
}

const initialState: CounterState = {
  value: 0,
  message: '대기',
  error: null,
};

const reducers = {
  increment: state => {
    state.value += 1;
  },
  decrement: state => {
    state.value -= 1;
  },
  incrementByAmount: (state, action: PayloadAction<number>) => {
    state.value += action.payload;
  },
  incrementByAmountAsync: (state, action: PayloadAction<number>) => {
    false
  },
  incrementByAmountSuccess: (state, { payload: { value, message } }) => {
    state.value = value;
    state.message = message;
  },
  incrementByAmountFail: (state, { payload: error }) => {
    state.error = error;
  },
}

export const slice = createSlice({
  name,
  initialState,
  reducers
});

const selectCountState = createSelector(
  (state: RootState) => state.value,
  (value) => value
);

const selectMessage = createSelector(
  (state: RootState) => state.message,
  (message) => message
);

const selectError = createSelector(
  (state: RootState) => state.error,
  (error) => error
);

const selectAllState = createSelector(
  selectCountState,
  selectMessage,
  selectError,
  (value, message, error) => {
    return { value, message, error };
  }
);

export const COUNTER = slice.name;
export const counterReducer = slice.reducer;
export const counterAction = slice.actions;
export const counterSelector = {
  all: (state: RootState) => selectAllState(state[COUNTER]),
  count: (state: RootState) => selectCountState(state[COUNTER]),
  error: (state: RootState) => selectError(state[COUNTER]),
  message: (state: RootState) => selectMessage(state[COUNTER]),
};

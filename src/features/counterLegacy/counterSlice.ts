import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from 'store/store';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counterLegacy',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const incrementAsync = (amount: number): AppThunk => dispatch => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

export const selectCount = (state: RootState) => state.counterLegacy.value;

export default counterSlice.reducer;

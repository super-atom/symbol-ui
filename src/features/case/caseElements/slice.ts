import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store/store';
import initialState from './state';

const name = 'caseElements';
const reducers = {
  changeOptions: (state, action: PayloadAction<any>) => {
    state.options = action.payload;
  },
}
export const slice = createSlice({ name, initialState, reducers });

const selectOptions = createSelector(
  (state: RootState) => state.options,
  (options) => options,
);

const selectAllState = createSelector(
  selectOptions,
  (options) => {
    return { options };
  }
);

export const CASE_ELEMENTS = slice.name;
export const caseElementsReducer = slice.reducer;
export const caseElementsAction = slice.actions;
export const caseElementsSelector = {
  all: (state: RootState) => selectAllState(state[CASE_ELEMENTS]),
  options: (state: RootState) => selectOptions(state[CASE_ELEMENTS]),
};

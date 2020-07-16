import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store/store';
import initialState from './state';

const name = 'caseElements';
const reducers = {
  load: (state) => {
    state.isLoading = true;
  },
  changeOptions: (state, action: PayloadAction<any>) => {
    state.options = action.payload;
  },
  fetchDataOption: (state, { payload: { limit, order, sortBy } }) => {
    state.options.limit = limit;
    state.options.order = order;
    state.options.sortBy = sortBy;
  },
  fetchDataSuccess: (state, { payload: { caseElements } }) => {
    state.isLoading = false;
    state.caseElements = caseElements;
  },
  fetchDataFail: (state, { payload: error }) => {
    state.isLoading = false;
    state.error = error;
  },
}
export const slice = createSlice({ name, initialState, reducers });

const selectCaseElements = createSelector(
  (state: RootState) => state.caseElements,
  (caseElements) => caseElements,
);

const selectOptions = createSelector(
  (state: RootState) => state.options,
  (options) => options,
);

const selectLoadingState = createSelector(
  (state: RootState) => state.isLoading,
  (isLoading) => isLoading,
);

const selectStatus = createSelector(
  (state: RootState) => state.status,
  (status) => status
);

const selectError = createSelector(
  (state: RootState) => state.error,
  (error) => error
);

const selectAllState = createSelector(
  selectCaseElements,
  selectOptions,
  selectStatus,
  selectError,
  selectLoadingState,
  selectLoadingState,
  (caseElements, options, status, message, error, isLoading) => {
    return { caseElements, options, status, message, error, isLoading };
  }
);

export const CASE_ELEMENTS = slice.name;
export const caseElementsReducer = slice.reducer;
export const caseElementsAction = slice.actions;
export const caseElementsSelector = {
  all: (state: RootState) => selectAllState(state[CASE_ELEMENTS]),
  caseElements: (state: RootState) => selectCaseElements(state[CASE_ELEMENTS]),
  status: (state: RootState) => selectStatus(state[CASE_ELEMENTS]),
  options: (state: RootState) => selectOptions(state[CASE_ELEMENTS]),
  error: (state: RootState) => selectError(state[CASE_ELEMENTS]),
  isLoading: (state: RootState) => selectLoadingState(state[CASE_ELEMENTS]),
};

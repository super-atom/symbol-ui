import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';

const name = 'profile';

interface ProfileState {
  profiles: [];
  options: {
    page: number;
    limit: number;
    order: string;
    sortBy: string;
  };
  error: any;
  status: string;
  isLoading: boolean;
}

const initialState = {
  profiles: [],
  options: {
    page: 1,
    limit: 3,
    order: 'ASC',
    sortBy: 'UpdatedAt',
  },
  error: null,
  status: '',
  isLoading: false,
};

const reducers = {
  load: (state) => {
    state.isLoading = true;
  },
  loadMore: (state) => {
    return state;
  },
  changeOptions: (state, action: PayloadAction<any>) => {
    state.options = action.payload;
  },
  changeOptionPage: (state, action: PayloadAction<number>) => {
    state.options.page = action.payload;
  },
  fetchDataOption: (state, { payload: { limit, order, sortBy } }) => {
    state.options.limit = limit;
    state.options.order = order;
    state.options.sortBy = sortBy;
  },
  fetchDataSuccess: (state, { payload: { profiles, options } }) => {
    state.isLoading = false;
    state.profiles = profiles;
    state.options = options;
  },
  fetchDataFail: (state, { payload: error }) => {
    state.isLoading = false;
    state.error = error;
  },
}

export const slice = createSlice({ name, initialState, reducers });

const selectProfiles = createSelector(
  (state: RootState) => state.profiles,
  (profiles) => profiles,
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
  selectProfiles,
  selectOptions,
  selectStatus,
  selectError,
  selectLoadingState,
  selectLoadingState,
  (profiles, options, status, message, error, isLoading) => {
    return { profiles, options, status, message, error, isLoading };
  }
);

export const PROFILE = slice.name;
export const profileReducer = slice.reducer;
export const profileAction = slice.actions;
export const profileSelector = {
  all: (state: RootState) => selectAllState(state[PROFILE]),
  profiles: (state: RootState) => selectProfiles(state[PROFILE]),
  status: (state: RootState) => selectStatus(state[PROFILE]),
  options: (state: RootState) => selectOptions(state[PROFILE]),
  error: (state: RootState) => selectError(state[PROFILE]),
  isLoading: (state: RootState) => selectLoadingState(state[PROFILE]),
};

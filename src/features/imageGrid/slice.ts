import { createSelector, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';

const name = 'UNSPLASH';

interface ImageGridState {
  isLoading: boolean,
  images: [],
  error: any,
  page: number
}

export const initialState: ImageGridState = {
  isLoading: false,
  images: [],
  error: null,
  page: 0,
};

const reducers = {
  load: (state) => {
    state.isLoading = true;
  },
  loadMore: (state) => {
    return state;
  },
  loadSuccess: (state, { payload: { images, nextPage } }) => {
    state.isLoading = false;
    state.images = images;
    state.page = nextPage;
  },
  loadFail: (state, { payload: error }) => {
    state.isLoading = false;
    state.error = error;
  },
}

const slice = createSlice({
  name, initialState, reducers
});

const selectLoadingState = createSelector(
  (state: RootState) => state.isLoading,
  (isLoading) => isLoading,
);

const selectImages = createSelector(
  (state: RootState) => state.images,
  (images) => images,
);

const selectError = createSelector(
  (state: RootState) => state.error,
  (error) => error,
);

const selectPage = createSelector(
  (state: RootState) => state.page,
  (page) => page,
);

const selectAllState = createSelector(
  selectLoadingState,
  selectImages,
  selectError,
  (isLoading, images, error) => {
    return { isLoading, images, error };
  }
);

export const UNSPLASH = slice.name;
export const unsplashReducer = slice.reducer;
export const unsplashAction = slice.actions;
export const unsplashSelector = {
  isLoading: (state: RootState) => selectLoadingState(state[UNSPLASH]),
  images: (state: RootState) => selectImages(state[UNSPLASH]),
  error: (state: RootState) => selectError(state[UNSPLASH]),
  all: (state: RootState) => selectAllState(state[UNSPLASH]),
  page: (state: RootState) => selectPage(state[UNSPLASH]),
};

import { configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const logger = createLogger({
  diff: true
})
const middleware = [sagaMiddleware, logger, ...getDefaultMiddleware({ thunk: true })];

export const store = configureStore({
  reducer: rootReducer(),
  devTools: true,
  middleware
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
import { configureStore, ThunkAction, Action, createStore, combineReducers, applyMiddleware, getDefaultMiddleware } from '@reduxjs/toolkit'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import createSagaMiddleware from 'redux-saga'
import saga from '../features/profile/profile.saga'
import rootReducer from '../reducers/root'

export const history = createBrowserHistory()
const router = routerMiddleware(history)
const sagaMiddleware = createSagaMiddleware()
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware, router]

export const store = configureStore({
  reducer: rootReducer(history),
  middleware
})

sagaMiddleware.run(saga)

export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
import { Reducer, combineReducers } from 'redux';
import counterLegacyReducer from '../features/counterLegacy/counterSlice';
import { COUNTER, counterReducer } from '../features/counter/slice';
import { UNSPLASH, unsplashReducer } from '../features/imageGrid/slice';
import { PROFILE, profileReducer } from '../features/profile/slice';

const rootReducer = (): Reducer => combineReducers({
  counterLegacy: counterLegacyReducer,
  [UNSPLASH]: unsplashReducer,
  [COUNTER]: counterReducer,
  [PROFILE]: profileReducer,
});

export default rootReducer;
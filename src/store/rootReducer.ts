import { Reducer, combineReducers } from 'redux';
import counterLegacyReducer from 'features/counterLegacy/counterSlice';
import { COUNTER, counterReducer } from 'features/counter/slice';
import { UNSPLASH, unsplashReducer } from 'features/imageGrid/slice';
import { PROFILE, profileReducer } from 'features/profile/slice';
import { CASE_ELEMENTS, caseElementsReducer } from 'features/case/caseElements/slice';

const rootReducer = (): Reducer => combineReducers({
  counterLegacy: counterLegacyReducer,
  [UNSPLASH]: unsplashReducer,
  [COUNTER]: counterReducer,
  [PROFILE]: profileReducer,
  [CASE_ELEMENTS]: caseElementsReducer,
});

export default rootReducer;
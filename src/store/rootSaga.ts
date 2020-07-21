import { all } from "redux-saga/effects";
import { watchUnsplash } from 'features/imageGrid/saga';
import { watchProfile } from 'features/profile/saga';
import { watchCount } from 'features/counter/saga';

export default function* rootSaga(): Generator {
  yield all([
    watchUnsplash(),
    watchCount(),
    watchProfile(),
  ]);
}
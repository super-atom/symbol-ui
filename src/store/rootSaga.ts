import { all } from "redux-saga/effects";
import { watchUnsplash } from '../features/imageGrid/saga';
import { watchCount } from '../features/counter/saga';

export default function* rootSaga(): Generator {
  yield all([
    watchUnsplash(),
    watchCount(),
  ]);
}
import { all } from "redux-saga/effects";
import { watchUnsplash } from 'features/imageGrid/saga';
import { watchProfile } from 'features/profile/saga';
import { watchCount } from 'features/counter/saga';
import { watchCaseElements } from 'features/case/caseElements/saga';

export default function* rootSaga(): Generator {
  yield all([
    watchUnsplash(),
    watchCount(),
    watchProfile(),
    watchCaseElements(),
  ]);
}
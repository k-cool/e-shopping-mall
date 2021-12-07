import { collection, getDocs } from '@firebase/firestore';
import { takeEvery, call, put } from 'redux-saga/effects';
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from '../../firebase/firebaseUtils';
import {
  fetchCollectionsfailure,
  fetchCollectionsSuccess,
} from './shopActions';
import { FETCH_COLLECTIONS_START } from './shopTypes';

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = collection(firestore, 'collections');
    const snapshot = yield getDocs(collectionRef);
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (err) {
    yield put(fetchCollectionsfailure(err.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeEvery(FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}

import {
  FETCH_COLLECTIONS_FAILURE,
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
} from './shopTypes';
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from '../../firebase/firebaseUtils';
import { collection, getDocs } from '@firebase/firestore';

export const fetchCollectionsStart = () => ({
  type: FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = collectionsMap => ({
  type: FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsfailure = errorMessage => ({
  type: FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

// thunk
export const fetchCollectionsStartAsync = () => {
  return async dispatch => {
    const collectionRef = collection(firestore, 'collections');
    dispatch(fetchCollectionsStart());

    try {
      const snapshot = await getDocs(collectionRef);
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(fetchCollectionsSuccess(collectionsMap));
    } catch (err) {
      dispatch(fetchCollectionsfailure(err.message));
    }
  };
};

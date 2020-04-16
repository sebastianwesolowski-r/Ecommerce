import {takeLatest, all, call, put} from 'redux-saga/effects';

import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';

import {fetchCollectionSuccess, fetchCollectionFailure} from './shop.actions';

import ShopActionTypes from './shop.types';

export function* fetchCollection() {
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionSuccess(collectionsMap));
    } catch(error) {
        yield put(fetchCollectionFailure(error.message));
    }
}

export function* fetchCollectionStart() {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTION_START, fetchCollection);
}

export function* shopSagas() {
    yield all([call(fetchCollectionStart)]);
}
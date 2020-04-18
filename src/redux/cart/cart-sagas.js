import {takeLatest, all, call, put} from 'redux-saga/effects';

import UserActionTypes from '../user/user.types';

import {clearCart} from '../cart/cart.actions';

export function* clearCartOnUserSignOut() {
    yield put(clearCart());
}

export function* onUserSignOutSuccess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnUserSignOut);
}

export function* cartSagas() {
    yield all([call(onUserSignOutSuccess)]);
}
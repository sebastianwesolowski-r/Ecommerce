import {combineReducers} from 'redux';

import directoryReducer from './directory/directory.reducer';
import userReducer from './user/user.reducer';
import shopReducer from './shop/shop.reducer';
import cartReducer from './cart/cart.reducer';

import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const reduxPersistConfig = {
    key: 'root',
    storage,
    whiteList: ['cart']
};

const rootReducer = combineReducers({
    directory: directoryReducer,
    user: userReducer,
    shop: shopReducer,
    cart: cartReducer
});

export default persistReducer(reduxPersistConfig, rootReducer);
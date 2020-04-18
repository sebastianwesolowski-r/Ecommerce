import ShopActionTypes from './shop.types';

const INITIAL_STATE = {
    collections: null,
    isLoaded: false,
    error: undefined
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ShopActionTypes.FETCH_COLLECTION_START:
            return {
                ...state,
            };
        case ShopActionTypes.FETCH_COLLECTION_SUCCESS:
            return {
                ...state,
                collections: action.payload,
                isLoaded: true
            };
        case ShopActionTypes.FETCH_COLLECTION_FAILURE:
            return {
                ...state,
                isLoaded: false,
                error: action.payload
            };
        default: return state;
    }
};

export default shopReducer;
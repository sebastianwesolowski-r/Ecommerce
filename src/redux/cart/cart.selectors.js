import {createSelector} from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartItemQuantity = createSelector(
    [selectCartItems],
    cartItems => cartItems.map(cartItem => cartItem.quantity)
);

export const selectCartTotalPrice = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulator, cartItem) => accumulator + cartItem.quantity * cartItem.itemPrice, 0)
);
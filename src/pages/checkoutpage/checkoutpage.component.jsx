import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectCartItems, selectCartTotalPrice} from '../../redux/cart/cart.selectors';

import CartItem from '../../components/cart-item/cart-item.component';

import './checkoutpage.styles.scss';

const Checkoutpage = ({cartItems, totalPrice}) => (
    <div className="checkout">
         <div className="checkout-header">
            <div className="summary">SUMMARY</div>
            <div className="quantity">QUANTITY</div>
            <div className="total">TOTAL</div>
         </div>
         {
             cartItems.map(cartItem => (
                 <CartItem key={cartItem.id} cartItemData={cartItem} />
             ))
         }
         <div className="cart-total">
            <p>CART TOTAL: ${totalPrice}</p> 
         </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalPrice: selectCartTotalPrice
});

export default connect(mapStateToProps)(Checkoutpage);
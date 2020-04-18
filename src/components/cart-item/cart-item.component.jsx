import React, {useState} from 'react';
import {connect} from 'react-redux';

import './cart-item.styles.scss';

import {ReactComponent as ClearIcon} from '../../assets/clearicon.svg';

import {removeItemFromCart} from '../../redux/cart/cart.actions';

const CartItem = ({cartItemData, removeItemFromCart, sumarizedPrice}) => {
    const {itemImg, itemName, itemColor, itemPrice, quantity} = cartItemData;
    const [itemTotal, setItemTotal] = useState(0);
    useState(() => {
        setItemTotal(itemPrice * quantity);
    }, []);
    return(
        <div className="cart-item">
            <div className="cart-item-summary">
                <div className="cart-item-img" style={{backgroundImage: `url(${itemImg})`}}></div>
                <div className="cart-item-data">
                    <p>{itemName}</p>
                    <p>COLOR: {itemColor}</p>
                    <p>PRICE: ${itemPrice}</p>
                </div>
            </div>
            <div className="cart-item-quantity">{quantity}</div>
            <div className="cart-item-total">
                <p>${itemTotal}</p>
                <ClearIcon className="clear-icon" onClick={() => removeItemFromCart(cartItemData)}/>
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    removeItemFromCart: cartItemData => dispatch(removeItemFromCart(cartItemData))
});

export default connect(null, mapDispatchToProps)(CartItem);
import React from 'react';
import {connect} from 'react-redux';

import {addItemToCart} from '../../redux/cart/cart.actions';

import './collection-item.styles.scss';

const CollectionItem = ({itemData, addItemToCart}) => {
    const {itemImg, itemName, itemColor, itemPrice} = itemData;
    return (
        <div className="item">
            <div className="img" style={{backgroundImage: `url(${itemImg})`}}></div>
            <div className="elements">
                <div className="name element">{itemName}</div>
                <div className="desc element">{itemColor}</div>
                <div className="desc element">$ {itemPrice}</div>
                <button className="button" onClick={() => addItemToCart(itemData)}>ADD TO CART</button>
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    addItemToCart: itemData => dispatch(addItemToCart(itemData))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
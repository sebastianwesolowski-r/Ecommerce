import React from 'react';
import {connect} from 'react-redux';

import {addItemToCart} from '../../redux/cart/cart.actions';

import CustomButton from '../custom-button/custom-button.component';

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
                <CustomButton onClick={() => addItemToCart(itemData)}>ADD TO CART</CustomButton>
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    addItemToCart: itemData => dispatch(addItemToCart(itemData))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
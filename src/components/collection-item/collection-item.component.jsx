import React from 'react';

import './collection-item.styles.scss';

const CollectionItem = ({itemData}) => {
    const {itemImg, itemName, itemColor, itemPrice} = itemData;
    return (
        <div className="item">
            <div className="img" style={{backgroundImage: `url(${itemImg})`}}></div>
            <div className="elements">
                <div className="name element">{itemName}</div>
                <div className="desc element">{itemColor}</div>
                <div className="desc element">$ {itemPrice}</div>
                <button className="button">ADD TO CART</button>
            </div>
        </div>
    );
};

export default CollectionItem;
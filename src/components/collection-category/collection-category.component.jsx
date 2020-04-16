import React from 'react';

import './collection-category.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionCategory = ({categoryData}) => {
    const {title, items} = categoryData;
    return (
        <div className="category">
            <div className="category-title">{title}</div>
            <div className="category-items">
                {
                    items.map(item => (
                        <CollectionItem key={item.id} itemData={item} />
                    ))
                }
            </div>
        </div>
    );
};

export default CollectionCategory;
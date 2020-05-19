import React from 'react';
import {connect} from 'react-redux';

import './collection.styles.scss';

import Spinner from '../spinner/spinner.component';
import CollectionCategory from '../collection-category/collection-category.component';
import {selectIsCollectionLoaded} from '../../redux/shop/shop.selectors';
import {selectCollection} from '../../redux/shop/shop.selectors';

const CollectionPage = ({collection, isLoaded}) => {
    return (
        isLoaded ? (
            <div className="collection">
                <div className="collection-title">{collection.title}</div>
                {
                    collection.categories.map(category => (
                        <CollectionCategory key={category.id} categoryData={category} />
                    ))
                }
            </div>
        ) : (
            <Spinner />
        )
    );
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionName)(state),
    isLoaded: selectIsCollectionLoaded(state)
});

export default connect(mapStateToProps)(CollectionPage);
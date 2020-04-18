import React, {useEffect} from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux'

import CollectionPage from '../../components/collection/collection.component';

import {fetchCollectionStart} from '../../redux/shop/shop.actions';

const Shoppage = ({fetchCollectionStart, match}) => {
   
    useEffect(() => {
        fetchCollectionStart();
    }, [fetchCollectionStart]);

    return (
        <div className="shop-page">
            <Route path={`${match.path}/:collectionName`} component={CollectionPage} />
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    fetchCollectionStart: () => dispatch(fetchCollectionStart())
});

export default connect(null, mapDispatchToProps)(Shoppage);
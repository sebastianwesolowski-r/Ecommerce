const INITIAL_STATE = {
    categories: [
        {
            id: 1,
            title: 'MEN',
            imageUrl: 'https://i.ibb.co/TmPftG7/men-collection.png',
            linkUrl: 'shop/men'
        },
        {
            id: 2,
            title: 'WOMEN',
            imageUrl: 'https://i.ibb.co/kJwwfpC/women-collection.png',
            linkUrl: 'shop/women'
        }
    ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default : return state;
    }
};

export default directoryReducer;
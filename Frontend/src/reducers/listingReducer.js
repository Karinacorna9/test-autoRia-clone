const initialState = {
    listings: [],
    loading: false,
    error: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_LISTINGS_REQUEST':
            return {...state, loading: true };
        case 'FETCH_LISTINGS_SUCCESS':
            return {...state, listings: action.listings, loading: false };
        case 'FETCH_LISTINGS_FAILURE':
            return {...state, error: action.error, loading: false };
        default:
            return state;
    }
};
import axios from 'axios';

export const fetchListings = () => {
    return async (dispatch) => {
        dispatch({ type: 'FETCH_LISTINGS_REQUEST' });
        try {
            const response = await axios.get('/api/listings');
            dispatch({ type: 'FETCH_LISTINGS_SUCCESS', listings: response.data });
        } catch (error) {
            dispatch({ type: 'FETCH_LISTINGS_FAILURE', error: error.message });
        }
    };
};
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import listingReducer from '../reducers/listingReducer';

const rootReducer = combineReducers({
    listing: listingReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
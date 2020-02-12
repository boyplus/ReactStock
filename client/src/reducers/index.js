import { combineReducers } from 'redux';
import authReducer from './authReducer';
import routeReducer from './routeReducer';
import profileReducer from './profileReducer';
import stockReducer from './stockReducer';
export default combineReducers({
    auth: authReducer,
    route: routeReducer,
    profile: profileReducer,
    stocks: stockReducer
});

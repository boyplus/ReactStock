import { combineReducers } from 'redux';
import authReducer from './authReducer';
import routeReducer from './routeReducer';
import stockReducer from './stockReducer';
export default combineReducers({
    auth: authReducer,
    route: routeReducer,
    stocks: stockReducer
});

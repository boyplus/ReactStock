import { combineReducers } from 'redux';
import authReducer from './authReducer';
import routeReducer from './routeReducer';
import stockReducer from './stockReducer';
import portfolioReducer from './portfolioReducer';
export default combineReducers({
    auth: authReducer,
    route: routeReducer,
    stocks: stockReducer,
    port: portfolioReducer
});

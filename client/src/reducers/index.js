import { combineReducers } from 'redux';
import authReducer from './authReducer';
import routeReducer from './routeReducer';
import profileReducer from './profileReducer';
export default combineReducers({
    auth: authReducer,
    route: routeReducer,
    profile: profileReducer
});

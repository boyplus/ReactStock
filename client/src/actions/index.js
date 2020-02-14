import {
    SIGN_IN,
    SIGN_OUT,
    UPDATE_PROFILE,
    FETCH_PROFILE,
    UPDATE_ROUTE,
    UPDATE_MONEY,
    FETCH_USER,
    FETCH_STOCKS,
    FETCH_PORTFOLIO,
    FETCH_DATA
} from './types';
import stocks from '../apis/index';
export const signIn = () => {
    return {
        type: SIGN_IN
    }
};
export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};
export const fetchData = () => async dispatch => {
    const response = await stocks.get('/api/user', { withCredentials: true });
    dispatch({ type: FETCH_DATA, payload: response.data });
};

export const updateProfile = profile => {
    return {
        type: UPDATE_PROFILE,
        payload: profile
    };
};

export const updateMoney = money => {
    return {
        type: UPDATE_MONEY,
        payload: money
    };
};

export const fetchUser = () => {
    return {
        type: FETCH_USER
    };
};

export const fetchProfile = () => {
    return {
        type: FETCH_PROFILE
    };
};

export const updateRoute = route => {
    return {
        type: UPDATE_ROUTE,
        payload: route
    };
};

export const fetchStocks = () => async dispatch => {
    const response = await stocks.get('/api/stocks');
    dispatch({ type: FETCH_STOCKS, payload: response.data });
};

export const fetchPortfolio = () => async dispatch => {
    const response = await stocks.get('/api/portfolio');
    console.log(response.data);
    dispatch({ type: FETCH_PORTFOLIO, payload: response.data });
};

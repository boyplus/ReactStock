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
    FETCH_AUTH,
    BUY_STOCK
} from './types';
import history from '../history';
import stocks from '../apis/index';
export const signIn = () => {
    return {
        type: SIGN_IN
    };
};
export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};

export const updateLogin = () => {
    return {
        type: 'UPDATE_LOGIN'
    };
};
export const fetchProfile = () => {
    return {
        type: FETCH_PROFILE
    };
};
export const fetchPortfolio = () => async dispatch => {
    const response = await stocks.get('/api/portfolio', {
        withCredentials: true
    });
    // console.log('from port');
    // console.log(response.data);
    dispatch({ type: FETCH_PORTFOLIO, payload: response.data });
};

export const buyStock = (stockID, quantity) => async dispatch => {
    const response = await stocks.patch(
        '/api/stock',
        {
            stockID: stockID,
            quantity: quantity
        },
        { withCredentials: true }
    );
    const test = await stocks.get('/api/portfolio', {
        withCredentials: true
    });
    dispatch({ type: FETCH_PORTFOLIO, payload: test.data });
    const test2 = await stocks.get('/api/user', { withCredentials: true });
    dispatch({ type: FETCH_AUTH, payload: test2.data });
};
export const fetchAuth = () => async dispatch => {
    const response = await stocks.get('/api/user', { withCredentials: true });
    dispatch({ type: FETCH_AUTH, payload: response.data });
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

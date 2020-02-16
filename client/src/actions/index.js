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
    BUY_STOCK,
    SELL_STOCK
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
    dispatch({ type: FETCH_PORTFOLIO, payload: response.data });
};

export const sellStock = (stock_id, quantity) => async dispatch => {
    const response = await stocks.put(
        '/api/stock',
        {
            stockID: stock_id,
            quantity: quantity
        },
        { withCredentials: true }
    );
    const response2 = await stocks.get('/api/user', { withCredentials: true });
    dispatch({ type: FETCH_AUTH, payload: response2.data });

    const response3 = await stocks.get('/api/portfolio', {
        withCredentials: true
    });
    dispatch({ type: FETCH_PORTFOLIO, payload: response3.data });
};
export const buyStock = (stockID, quantity) => async dispatch => {
    await stocks.patch(
        '/api/stock',
        {
            stockID: stockID,
            quantity: quantity
        },
        { withCredentials: true }
    );
    const response = await stocks.get('/api/user', { withCredentials: true });
    dispatch({ type: FETCH_AUTH, payload: response.data });
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

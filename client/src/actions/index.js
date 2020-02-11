import { SIGN_IN, SIGN_OUT, UPDATE_PROFILE, FETCH_PROFILE, UPDATE_ROUTE } from './types';
export const signIn = userId => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};

export const updateProfile = (profile) => {
    return {
        type: UPDATE_PROFILE,
        payload: profile
    }
};

export const fetchProfile = () => {
    return {
        type: FETCH_PROFILE
    }
};

export const updateRoute = (route) => {
    return {
        type: UPDATE_ROUTE,
        payload: route
    }
}
export const fetchStocks = () => {};

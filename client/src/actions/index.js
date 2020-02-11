import { SIGN_IN, SIGN_OUT } from './types';
export const signIn = userId => {
    return {
        action: SIGN_IN,
        payload: userId
    };
};

export const signOut = () => {
    return {
        action: SIGN_OUT,
    };
};
export const fetchStocks = () => {};

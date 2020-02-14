import {
    SIGN_IN,
    SIGN_OUT,
    UPDATE_PROFILE,
    FETCH_PROFILE,
    FETCH_DATA
} from '../actions/types';
const INITIAL_STATE = {
    isSignedIn: null,
    userId: null,
    profile: null
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_IN:
            return { ...state, isSignedIn: true};
        case FETCH_DATA:
            return { ...state, isSignedIn: true, userId: action.payload.id };
        case SIGN_OUT:
            return { ...state, isSignedIn: false, userId: null, profile: null };
        case UPDATE_PROFILE:
            return { ...state, profile: action.payload };
        case FETCH_PROFILE:
            return state.profile;
        default:
            return state;
    }
};

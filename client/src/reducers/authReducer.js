import { SIGN_IN, SIGN_OUT, UPDATE_PROFILE, FETCH_PROFILE } from '../actions/types';
const INITIAL_STATE = {
    isSignedIn: null,
    userId: null,
    profile: null,
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_IN:
            return { ...state, isSignedIn: true, userId: action.payload };
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

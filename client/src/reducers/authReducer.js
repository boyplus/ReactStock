import {
    SIGN_IN,
    SIGN_OUT,
    UPDATE_PROFILE,
    FETCH_PROFILE,
    FETCH_AUTH
} from '../actions/types';
const INITIAL_STATE = {
    isSignedIn: null,
    userId: null,
    profile: null
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_IN:
            return { ...state, isSignedIn: true };
        case FETCH_AUTH:
            const profile = {
                name: action.payload.name,
                email: action.payload.email,
                fund: action.payload.fund,
                imageUrl: action.payload.profile_pic
            };
            return {
                ...state,
                isSignedIn: true,
                userId: action.payload.id,
                profile: profile
            };
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

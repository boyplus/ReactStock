import { UPDATE_MONEY, FETCH_USER } from '../actions/types';
const INITIAL_STATE = { money: 1000 };
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_MONEY:
            return { ...state, money: action.payload };
        case FETCH_USER:
            return state;
        default:
            return state;
    }
};

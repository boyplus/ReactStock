import { FETCH_PORTFOLIO } from '../actions/types';

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_PORTFOLIO:
            return action.payload;
        default:
            return state;
    }
};

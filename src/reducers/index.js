import { POPULATE_SHORT_URL } from '../constants';

export default function(state, action) {
    switch (action.type) {
        case POPULATE_SHORT_URL:
            return { 
                ...state,
                shortUrl: action.shortUrl
            };
        default:
            return state;
    }
}

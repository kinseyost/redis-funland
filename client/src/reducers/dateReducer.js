import Immutable from 'immutable';
import { DATE_UPDATE } from '../constants/dateConstants.js';

export default function dateReducer(state = Immutable.Map(), action) {
    const { type, date } = action;
    switch (type) {
        case DATE_UPDATE:
            debugger;
            return date;
        default:
            return state;
    }
}
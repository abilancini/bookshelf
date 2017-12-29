import {
    SET_TERM
} from '../actions/types';
import { Map } from 'immutable';

export const initialState = Map({
    term: ''
});

export default function(state = initialState, action) {

    switch(action.type) {
        case SET_TERM:
            return state.set('term', action.payload);
        default:
            return state;
    }
}

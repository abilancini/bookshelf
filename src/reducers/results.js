import {
    SET_RESULTS
} from '../actions/types';
import { Map } from 'immutable';

export const initialState = Map({
    results: []
});

export default function(state = initialState, action) {

    switch(action.type) {
        case SET_RESULTS:
            return state.set('results', action.payload);
        default:
            return state;
    }
}

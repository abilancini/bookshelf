import {
    SET_SELECTED_BOOK
} from '../actions/types';
import { Map } from 'immutable';

export const initialState = Map({
    selectedBook: undefined
});

export default function(state = initialState, action) {

    switch(action.type) {
        case SET_SELECTED_BOOK:
            return state.set('selectedBook', action.payload);
        default:
            return state;
    }
}

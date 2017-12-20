import {
    SET_BOOKSHELFLIST
} from '../actions/types';
import { Map } from 'immutable';

export const initialState = Map({
    bookShelfList: []
});

export default function(state = initialState, action) {

    switch(action.type) {
        case SET_BOOKSHELFLIST:
        console.log("state in shelf.js is: ", state);
        console.log("action.payload.title is ", action.payload.title);
            return state.set("bookShelfList", [...state.get('bookShelfList'), action.payload.title] );

        default:
            return state;
    }
}

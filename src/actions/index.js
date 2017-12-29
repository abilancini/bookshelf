import {
    SET_TERM, SET_RESULTS, SET_SELECTED_BOOK, SET_BOOKSHELFLIST
} from './types';

export function setTerm(term) {
  return {
      type: SET_TERM,
      payload: term
  };
}

export function setResults(results) {
  return {
    type: SET_RESULTS,
    payload: results
  };
}

export function setSelectedBook(selectedBook) {
  return {
    type: SET_SELECTED_BOOK,
    payload: selectedBook
  };
}

export function setBookShelfList(selectedBook) {
  return {
    type: SET_BOOKSHELFLIST,
    payload: selectedBook
  };
}

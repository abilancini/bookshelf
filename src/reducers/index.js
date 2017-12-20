import { combineReducers } from 'redux';
import BookReducer from './books';
import ResultsReducer from './results';
import SelectedBookReducer from './selectedBook';
import ShelfReducer from './shelf';

const rootReducer = combineReducers({

  books: BookReducer,
  results: ResultsReducer,
  selectedBook: SelectedBookReducer,
  shelf: ShelfReducer
});

export default rootReducer;

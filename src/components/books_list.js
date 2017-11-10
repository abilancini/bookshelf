import React, { Component } from 'react';
import BookItem from './book_item';


export default class BooksList extends Component {
  render() {
    var bookList = _.map(this.props.results, (book) => {
      return (
        <BookItem
          onBookSelect={this.props.onBookSelect}
          key={book.id}
          book={book} />
      );
    });

    return (
      <div>
        <ul className="col-md-4 list-group">
        {bookList}
        </ul>
      </div>
    );
  };
}

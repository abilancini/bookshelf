import React, { Component } from 'react';
import SearchListItem from './searchlistitem';

export default class SearchResults extends Component {
  render() {
    var bookList = _.map(this.props.results, (book) => {
      return (
        <SearchListItem
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

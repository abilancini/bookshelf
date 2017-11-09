import React, { Component } from 'react';

export default class BookShelf extends Component {

  render() {
    var booksOnBookShelf = _.map(this.props.bookShelfList, (book) => {
      return (
        <li>{book.title}</li>
      )
    })
    if (this.props.bookShelfList.length !== 0) {
      return (
      <div className='bookshelf'>
        <h2>My Bookshelf</h2>
        <ul>{booksOnBookShelf}</ul>
      </div>
      );
    } else {
      return (
        <div>
        </div>
      );
    }
  }
}

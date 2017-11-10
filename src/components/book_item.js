import React, { Component } from 'react';

export default class BookItem extends Component {


  render() {
    const { book, onBookSelect } = this.props;
    const imageUrl = book.thumbnail;

    return (
      <li onClick={() => onBookSelect(book)} className="list-group-item">
        <div className="book-list media">
          <div className="media-left">
            <img className="media-object" src={imageUrl} />
          </div>
          <div className="media-body">
            <div className="media-heading">{book.title}</div>
          </div>
        </div>
      </li>
    );
  }
}

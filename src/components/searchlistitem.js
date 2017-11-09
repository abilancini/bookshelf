import React, { Component } from 'react';

const SearchListItem = ({book, onBookSelect}) => {
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
};

export default SearchListItem;

//return<li key={book.id}> {book.title}, {book.authors} <img className="media-object" src={book.thumbnail} /><Button/></li>;

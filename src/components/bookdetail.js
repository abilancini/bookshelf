import React, { Component } from 'react';

const BookDetail = ({book, onBookShelfSelect}) => {
  console.log("the book we're dealing with in BookDetail is ", book);

  if (book === null || book === undefined) {
    return (
      <div></div>
    );
  }

  return (
    <div className="book-detail col-md-8">
      <div>
        <img src={book.thumbnail} />
      </div>
      <div className="details">
        <div>
          <button onClick={() => onBookShelfSelect(book)}>Add to Bookshelf</button>
          <h1>{book.title}</h1>
        </div>
        <div><h2>{book.authors}</h2></div>
        <div>{book.description}</div>
      </div>
    </div>
  );
};

export default BookDetail;

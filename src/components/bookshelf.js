import React, { Component } from 'react';

export default class BookShelf extends Component {
  createListItems() {
    return this.props.bookShelfList.map((item) => {
      return (
        <li>{item}</li>
      );
    });
  }

  render() {
    console.log("bookShelfList is ", this.props.bookShelfList)
    if (this.props.bookShelfList.length !== 0) {
      return (
      <div className='bookshelf'>
        <h2>My Bookshelf</h2>
        <ul>{this.createListItems()}</ul>
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

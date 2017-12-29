import React, { Component } from 'react';
import BookDetail from './bookdetail';
import _ from 'lodash';
import BookShelf from './bookshelf';
import CardCatalog from './card_catalog';
import { setBookShelfList, setSelectedBook } from '../actions';
import { connect } from 'react-redux';


class BookLibrary extends Component {
  updateSelectedBook(selectedBook) {
    this.props.setSelectedBook(selectedBook);
    console.log("UpdateSelectedBook in BookLibrary ran!");
  }

  updateBookShelfList(selectedBook) {
    this.props.setBookShelfList(selectedBook);
    console.log("UpdateBookShelfList in BookLibrary ran!")
    console.log("selectedBook to add to shelf in book library is ", selectedBook);
  }

  render() {
    return (
    <div>
      <CardCatalog
        term={this.props.term}
        onBookSelect={ (selectedBook) => { this.updateSelectedBook(selectedBook) }}
      />
      <BookDetail
        book={this.props.selectedBook}
        onBookShelfSelect={ (selectedBook) => { this.updateBookShelfList(selectedBook) }}
      />
      <BookShelf bookShelfList={this.props.bookShelfList}/>

    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    term: state.books.get('term'),
    selectedBook: state.selectedBook.get('selectedBook'),
    bookShelfList: state.shelf.get('bookShelfList')
  }
}

const mapDispatchToProps = {
  setSelectedBook,
  setBookShelfList
}

export default connect(mapStateToProps, mapDispatchToProps)(BookLibrary);

import React, { Component } from 'react';
import SearchResults from './searchresults';
import BookDetail from './bookdetail';
import _ from 'lodash';
import BookShelf from './bookshelf';

var books = require('google-books-search');

export default class BookLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      selectedBook: null,
      bookShelfList: []
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.term !== nextProps.term && nextProps.term) {
      this.search(nextProps.term);
    }
  }

  render() {
    console.log("here's the search results: ", this.state.results);
    console.log("Here's the bookShelfList: ", this.state.bookShelfList)
    console.log("here's the selectedBook: ", this.state.selectedBook)
    console.log("here's the term: ", this.props.term)
    return (
    <div>
      <SearchResults
        onBookSelect={ selectedBook => this.setState({selectedBook}) }
        results={this.state.results}/>
      <BookDetail
        book={this.state.selectedBook}
        onBookShelfSelect={ selectedBook => this.setState({ bookShelfList: [...this.state.bookShelfList, selectedBook]}) }
      />
      <BookShelf bookShelfList={this.state.bookShelfList}/>
    </div>
    );
  }

  search(term) {
    books.search(term, (error, data) => {
      if ( ! error ) {
        this.setState({
          results: data,
          selectedBook: data[0]
        })
      } else {
        console.log(error);
      }
    })
  }
}

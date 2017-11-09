import React, { Component } from 'react';
import SearchResults from './searchresults';
import BookDetail from './bookdetail';
import _ from 'lodash';
import BookShelf from './bookshelf';

var books = require('google-books-search');

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      selectedBook: null,
      term: '',
      bookShelfList: []
    };

  books.search(this.state.term, (error, data) => {
      if ( ! error ) {
          this.setState({
            results: data,
            selectedBook: data[0]
          })
      } else {
          console.log(error);
      }
    });
  }

  render() {
    const bookSearch = _.debounce((e) => { this.updateSearch(); }, 300);

    console.log("here's the search results: ", this.state.results);
    console.log("Here's the bookShelfList: ", this.state.bookShelfList)
    console.log("here's the selectedBook: ", this.state.selectedBook)
    return (
    <div>
      Search:
      <input className="search-bar" ref="query" placeholder="Type your search terms here" onChange={ bookSearch } type="text"/>
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

  updateSearch() {
    this.search(this.refs.query.value);
  }

  search(term="") {
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

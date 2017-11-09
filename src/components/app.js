import React, { Component } from 'react';
import BookLibrary from './book_library';
import SearchBar from './search_bar';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }

  updateSearchTerm(term) {
    this.setState({term});
  }

  render() {
    return (
      <div>
        <h1>Create Your Bookshelf, Nerd!</h1>
        <SearchBar
          onTermChange={(term) => { this.updateSearchTerm(term) }}/>
        <BookLibrary term={this.state.term}/>
      </div>
    )
  }
}

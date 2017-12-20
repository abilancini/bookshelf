import React, { Component } from 'react';
import BookLibrary from './book_library';
import SearchBar from './search_bar';
import { connect } from 'react-redux';
import { setTerm } from '../actions';

class App extends Component {
  updateSearchTerm(term) {
    this.props.setTerm(term);
    console.log("i got to updateSearchTerm and term is ", term);
  }

  render() {
    return (
      <div>
        <h1>Create Your Bookshelf, Nerd!</h1>
        <SearchBar
          onTermChange={(term) => { this.updateSearchTerm(term) }}/>
        <BookLibrary />
      </div>
    )
  }
}

const mapDispatchToProps = {
  setTerm
}

export default connect(null, mapDispatchToProps)(App);

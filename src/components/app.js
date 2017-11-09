import React, { Component } from 'react';
import SearchBar from './searchbar';
import Title from './title';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Create Your Bookshelf, Nerd!</h1>
        <SearchBar/>
      </div>
    )
  }
}

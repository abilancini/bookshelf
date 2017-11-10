import React, { Component } from 'react';
import BookDetail from './bookdetail';
import _ from 'lodash';
import BookShelf from './bookshelf';
import CardCatalog from './card_catalog';

export default class BookLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBook: undefined,
      bookShelfList: []
    };
  }

  render() {
    console.log("here's the search results: ", this.state.results);
    console.log("Here's the bookShelfList: ", this.state.bookShelfList)
    console.log("here's the selectedBook: ", this.state.selectedBook)
    console.log("here's the term: ", this.props.term)
    return (
    <div>
      <CardCatalog
        term={this.props.term}
        onBookSelect={ selectedBook => this.setState({selectedBook}) }
      />
      <BookDetail
        book={this.state.selectedBook}
        onBookShelfSelect={ selectedBook => this.setState({ bookShelfList: [...this.state.bookShelfList, selectedBook]}) }
      />
      <BookShelf bookShelfList={this.state.bookShelfList}/>
    </div>
    );
  }


}

import React, { Component } from 'react';
import BooksList from './books_list';

var books = require('google-books-search');

export default class CardCatalog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
  }

  componentWillReceiveProps(nextProps) {
    const currentTerm = this.props.term;
    const nextTerm = nextProps.term;

    if (nextTerm && currentTerm !== nextTerm) {
      this.search(nextTerm);
    }
  }

  search(term) {
    books.search(term, (error, data) => {
      if ( ! error ) {
        this.setState({
          results: data
        });
      } else {
        console.log(error);
      }
    })
  }

  render() {
    return (
      <BooksList
        results={this.state.results}
        onBookSelect={this.props.onBookSelect}
      />
    )
  }
}

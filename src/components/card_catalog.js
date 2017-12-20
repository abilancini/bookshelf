import React, { Component } from 'react';
import BooksList from './books_list';
import { setResults } from '../actions';
import { connect } from 'react-redux';

var books = require('google-books-search');

class CardCatalog extends Component {
  componentWillReceiveProps(nextProps) {
    const currentTerm = this.props.term;
    const nextTerm = nextProps.term;

    if (nextTerm && currentTerm !== nextTerm) {
      this.search(nextTerm);
      console.log("CardCatalog says i got here");
    }
  }

  search(term) {
    books.search(term, (error, data) => {
      if ( ! error ) {
        this.props.setResults(data);
      } else {
        console.log(error);
      }
    })
  }

  render() {
    return (
      <BooksList
        results={this.props.results}
        onBookSelect={this.props.onBookSelect}
      />
    )
  }
}

function mapStateToProps(state) {
  return {
    results: state.results.get('results')
  };
}

const mapDispatchToProps = {
  setResults
}

export default connect(mapStateToProps, mapDispatchToProps)(CardCatalog);

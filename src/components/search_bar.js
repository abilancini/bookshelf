import React from 'react';

export default class SearchBar extends React.Component {
  render() {
    const bookSearch = _.debounce((term) => {
      this.props.onTermChange(term);
    }, 300);

    return (
      <div>
        Search:
        <input
          className="search-bar"
          placeholder="Type your search terms here"
          onChange={ (e) => bookSearch(e.target.value) }
          type="text"/>
      </div>
    )
  }
}

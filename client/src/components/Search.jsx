import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: '' }

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ value: e.target.value });
  }

  handleSearch(e) {
    e.preventDefault();
    for (var i = 0; i < this.props.characters.length; i++) {
      if (this.props.characters[i].name.toLowerCase() === this.state.value.toLowerCase()) {
        this.props.setCurrentCharacter(this.props.characters[i])
      }
    }
  }

  render() {
    return (
      <form>
        <label>
          Enter character name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <button onClick={this.handleSearch}>Search</button>
      </form>
    )
  }
}

export default Search
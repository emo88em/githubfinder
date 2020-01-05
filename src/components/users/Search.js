import React, { Component } from 'react';

class Search extends Component {
  state = {
    text: ''
  };

  onChange = e => {
    this.setState({ text: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            type='text'
            name='text'
            placeholder='Search Users...'
            value={this.state.text}
            onChange={this.onChange}
          />
          <button className='btn btn-dark btn-block'>Enter</button>
        </form>
        <button
          className='btn btn-light btn-block'
          onClick={this.props.clearUsers}>
          Clear
        </button>
      </div>
    );
  }
}

export default Search;

import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };
  
  onInputChange = (event) => {
    this.setState({ term: event.target.value })
  };
  
  onFormSubmit = event =>{
    event.preventDefault();
    
    this.props.onFormSubmit(this.state.term)
  };
  
  render () {
    return (
    <div className="search-bar ui segment">
      <form onSubmit={this.onFormSubmit} className="ui form">
        <div className="field">
          <label>Video Search</label>
          <div className="ui icon input">
            <input 
              className="prompt"
              type="text" placeholder="Search videos..." 
              value={this.state.term}
              onChange={this.onInputChange}
              />
            <i className="search icon"></i>
          </div>
        </div>
      </form>
    </div>
    );
  }
}

export default SearchBar;
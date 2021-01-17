import React from 'react';
import PropTypes from 'prop-types';

class MainForms extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      version: 'DARBY',
      book: 'Genesis',
      query: '',
    }

    this.onFormChange = this.onFormChange.bind(this);
    this.onQuerySubmit = this.onQuerySubmit.bind(this);
    this.onChaptersClick = this.onChaptersClick.bind(this);
  }

  onFormChange (event) {
    let name = event.target.name;
    let value = event.target.value;
    console.log(value);
    this.setState({
      [name] : value
    })
  }

  onQuerySubmit(event) {
    event.preventDefault();
    let processedQuery = this.state.query.split(' ').join('');
    this.props.onSearch(this.state.version, processedQuery)
  }

  onChaptersClick () {
    this.props.showChapters(this.state.version, this.state.book);
  }


  render () {
    let buttonText;
    this.props.show ? buttonText = 'Hide Chapters' : buttonText = 'Show Chapters'
    return(
      <div>
        <div className="form-container">
          <form
            className="form-item"
            value={this.state.version}
            onChange={this.onFormChange}>
            <label>Select A Translation</label><br></br>
            <select name="version" id="versions">
              {this.props.bibles.map((bibleObj, i) => {
                return(
                  <option value={bibleObj.bible}
                    key={i}>{bibleObj.title}</option>
                );
              }) }
            </select>
          </form><br></br>

          <form
            className="form-item"
            value={this.state.book}
            onChange={this.onFormChange}>
            <label>Select A Book</label><br></br>
            <select name="book" id="books">
              {this.props.books.map((bookObj,i) => {
                return (
                  <option value={bookObj.name} key={i}>{bookObj.name}</option>
                );
              }, this)}
            </select>
          </form>

          <form onSubmit={this.onQuerySubmit} className="form-item" id="search">
            <input
              name="query"
              type="text"
              value={this.state.query}
              onChange={this.onFormChange}>
            </input>
            <button type="submit">Search</button>
          </form>
        </div>
        <button
          onClick={this.onChaptersClick}>
          {buttonText}
      </button>
      </div>
    )
  }
}

MainForms.propTypes = {
  show: PropTypes.bool.isRequired,
  bibles: PropTypes.array.isRequired,
  books: PropTypes.array.isRequired,
  onSearch: PropTypes.func.isRequired,
  showChapters: PropTypes.func.isRequired
}

export default MainForms;
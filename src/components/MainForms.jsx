import React from 'react';
import PropTypes from 'prop-types';
import {searchSvg} from './buttonSvg.jsx';

class MainForms extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      version: 'DARBY',
      book: 'Genesis',
      query: '',
      queryParam: 'DARBY'
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
    let book;
    let processedQuery = this.state.query.split(' ').join('');
    let param = this.state.queryParam;

    //conditionals for search params based on client choice
    if (param === this.state.version) {
      book = null
    } else if (param === 'ot') {
      book = 'Genesis-Malachi'
    } else if (param === 'nt') {
      book = 'Matthew-Revelation'
    } else {
      book = this.state.book
    }
    this.props.onSearch(this.state.version, processedQuery, book)
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
            className="form-item form1"
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
            className="form-item form2"
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

          <form
            onChange={this.onFormChange}
            className="form-item form3"
            id="search">
            <label>Search By</label><br></br>
            <select name="queryParam">
              <option value={this.state.version}>Whole Bible</option>
              <option value="ot">Old Testament</option>
              <option value="nt">New Testament</option>
              <option value={this.state.book}>Book ({this.state.book})</option>
            </select><br></br>
            <input
              name="query"
              type="text"
              value={this.state.query}
              onChange={this.onFormChange}>
            </input>
            <button id="search-button" onClick={(event) =>(this.onQuerySubmit(event))} type="submit">
              {searchSvg}
            </button>
          </form>
        </div>
        <button
          id="chapter-show"
          onClick={this.onChaptersClick}>
          {buttonText}
      </button><br></br>
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


import React from 'react';
import PropTypes from 'prop-types';

class MainForms extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      version: 'DARBY',
      book: {},
      query: '',
      clicked: false
    }

    this.onVersionChange = this.onVersionChange.bind(this);
    this.onBookChange = this.onBookChange.bind(this);
    this.onQueryChange = this.onQueryChange.bind(this);
    this.onQuerySubmit = this.onQuerySubmit.bind(this);
    this.onChaptersClick = this.onChaptersClick.bind(this);
  }

  onVersionChange (event) {
    this.setState({version: event.target.value})
  }

  onBookChange (event) {
    this.setState({
      book: event.target.value,
      clicked: true
    })
    console.log(this.state.book)
  }

  onQueryChange (event) {
    this.setState({query: event.target.value});
  }

  onQuerySubmit(event) {
    event.preventDefault();
    let processedQuery = this.state.query.split(' ').join('');
    this.props.onSearch(this.state.version, processedQuery)
  }

  onChaptersClick () {
    console.log('here');
    if (this.state.clicked) {
      this.props.showChapters(this.state.version, this.state.book);
    } else {
      alert('Please Select A Book')
    }
  }


  render () {
    return(
      <div>
        <div className="form-container">
          <form
            className="form-item"
            value={this.state.version}
            onChange={this.onVersionChange}>
            <label>Select A Translation</label><br></br>
            <select id="versions">
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
            onChange={this.onBookChange}>
            <label>Select A Book</label><br></br>
            <select id="books">
              {this.props.books.map((bookObj,i) => {
                return (
                  <option value={bookObj} key={i}>{bookObj.name}</option>
                )
              })}
            </select>
          </form>

          <form onSubmit={this.onQuerySubmit} className="form-item" id="search">
            <input
              type="text"
              value={this.state.query}
              onChange={this.onQueryChange}>
            </input>
            <button type="submit">Search</button>
          </form>
        </div>
        <button
          onClick={this.onChaptersClick} type="submit">
          Select A Chapter
      </button>
      </div>
    )
  }
}

MainForms.propTypes = {
  bibles: PropTypes.array.isRequired,
  books: PropTypes.array.isRequired,
  onSearch: PropTypes.func.isRequired,
  showChapters: PropTypes.func.isRequired
}

export default MainForms;
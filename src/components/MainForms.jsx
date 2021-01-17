import React from 'react';
import PropTypes from 'prop-types';

class MainForms extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      version: 'DARBY',
      book: 'Genesis'
    }

    this.onVersionChange = this.onVersionChange.bind(this);
    this.onBookChange = this.onBookChange.bind(this);
  }

  onVersionChange (event) {
    this.setState({version: event.target.value})
  }

  onBookChange (event) {
    this.setState({book: event.target.value})
  }


  render () {
    return(
      <div>
        <div className="form-container">
          <form
            className="form-item"
            value={this.state.version}
            onChange={this.onVersionChange}>
            <label>Select A Translation</label>
            <select id="versions">
              {this.props.bibles.map((bibleObj, i) => {
                return(
                  <option value={bibleObj.abbreviatedTitle}
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
                  <option value={bookObj.name} key={i}>{bookObj.name}</option>
                )
              })}
            </select>
          </form>
        </div>
      </div>
    )
  }
}

MainForms.propTypes = {
  bibles: PropTypes.array.isRequired,
  books: PropTypes.array.isRequired
}

export default MainForms;
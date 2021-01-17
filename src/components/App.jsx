import React from 'react';
//import VersionsForm from './VersionsForm.jsx';
import MainForms from './MainForms.jsx';
import {getBiblesList, getSearchResults} from '../serverReqs';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      bibles: [],
      books: []
    }
    this.onSearch = this.onSearch.bind(this);
    this.onShowChaptersSubmit = this.onShowChaptersSubmit.bind(this);
  }

  componentDidMount () {
    getBiblesList()
      .then(data => {
        this.setState({
          bibles: data[0].bibles,
          books: data[1].data
        })
      })
  }

  onSearch(version, query, book) {
    getSearchResults(version, query, book)
      .then(data => {
        data.length ? console.log(data) : alert('sorry, no results')
      })
      .catch(err => {throw err});
  }

  onShowChaptersSubmit (version, book) {
    console.log(version, book.name)
  }

  render() {
    return (
      <div>
        <div className="header">
          <h1>Bible App</h1>
        </div>
        {/* <VersionsForm /> */}
        <MainForms
          books={this.state.books}
          bibles={this.state.bibles}
          onSearch={this.onSearch}
          showChapters={this.onShowChaptersSubmit} />
      </div>
    );
  }
}

export default App;
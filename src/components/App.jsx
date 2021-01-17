import React from 'react';
//import VersionsForm from './VersionsForm.jsx';
import MainForms from './MainForms.jsx';
import ChaptersForm from './ChaptersForm.jsx';
import ChapterView from './ChapterView.jsx';
import {getBiblesList, getSearchResults, getChapterInfo} from '../serverReqs';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      bibles: [],
      books: [],
      version: '',
      chapters: [],
      book: [],
      chapterNum: 1,
      chapterHTML: ''
    }
    this.onSearch = this.onSearch.bind(this);
    this.onShowChaptersSubmit = this.onShowChaptersSubmit.bind(this);
    this.onChapterSelect = this.onChapterSelect.bind(this);
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
    //api request for search results (20)
    getSearchResults(version, query, book)
      .then(data => {
        data.length ? console.log(data) : alert('sorry, no results')
      })
      .catch(err => {throw err});
  }

  onShowChaptersSubmit (version, book) {
    //set chapters state for specific book
    let chapters = [];
    for (let bookObj of this.state.books) {
      if (bookObj.name === book) {
        chapters = bookObj.chapters.slice(1);
      }
    }
    this.setState({
      chapters: chapters,
      version: version,
      book: book
    })
  }

  onChapterSelect (chapNum) {
    chapNum = chapNum*1
    this.setState({
      chapterNum: chapNum
    })
    //api request for chapter html
    getChapterInfo(this.state.version, this.state.book, chapNum)
      .then((data) => {
        this.setState({
          chapterHTML: data
        })
      });
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
        <ChaptersForm
          onChapterSelect={this.onChapterSelect}
          chapters={this.state.chapters} />
        <ChapterView
          text={this.state.chapterHTML}
          chapterNum={this.state.chapterNum}
          bookLength={this.state.chapters.length}
          onChapterSelect={this.onChapterSelect}/>
      </div>
    );
  }
}

export default App;
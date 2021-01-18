import React from 'react';
import MainForms from './MainForms.jsx';
import ChaptersForm from './ChaptersForm.jsx';
import ChapterView from './ChapterView.jsx';
import SearchResults from './SearchResults.jsx';
import {getBiblesList, getSearchResults, getChapterInfo} from '../serverReqs';
import {spaceSvg, lightSvg} from './buttonSvg.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      bibles: [],
      books: [],
      version: 'DARBY',
      chapters: [],
      book: [],
      chapterNum: 1,
      chapterHTML: '',
      searchResults: [],
      showChapters: false,
      showChapText: false,
      showSearchResults: false,
      theme: true
    }
    this.onSearch = this.onSearch.bind(this);
    this.onShowChaptersSubmit = this.onShowChaptersSubmit.bind(this);
    this.onChapterSelect = this.onChapterSelect.bind(this);
    this.onThemeChange = this.onThemeChange.bind(this);
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
        data.length ? this.setState({
          searchResults: data,
          showChapText: false,
          showSearchResults: true
        }) : alert('sorry, no results')
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
      book: book,
      showChapters: true
    })
  }

  onChapterSelect (chap, fromSearch) {
    window.scrollTo(0,0);
    //api request for chapter html
    let request = () => {
      getChapterInfo(this.state.version, this.state.book, chapNum)
        .then((data) => {
          this.setState({
            chapterHTML: data,
            chapterNum: chapNum,
            showChapText: true,
            showSearchResults: false,
            showChapters: false
          })
        });
    }

    //conditional for if invoking from a search result
    let chapNum;
    if (fromSearch) {
      chapNum = chap.chapNum * 1;
      this.setState({
        book: chap.chapter
      }, ()=>{request()})
    } else {
      chapNum = chap*1
      request()
    }
  }

  onThemeChange () {
    this.setState({
      theme: !this.state.theme
    })
    let bodyElement = document.querySelectorAll('body')[0];
    this.state.theme ? bodyElement.id = 'light' : bodyElement.id = 'space'
  }

  render() {

    let themeSvg;
    this.state.theme ? themeSvg= lightSvg : themeSvg = spaceSvg
    return (
      <div>
        <div className="header">
          <h1>Bible App</h1>
          <button id="mode" onClick={this.onThemeChange}>{themeSvg}</button>
        </div>
        <MainForms
          show={this.state.showChapters}
          books={this.state.books}
          bibles={this.state.bibles}
          onSearch={this.onSearch}
          showChapters={this.onShowChaptersSubmit} />
        <ChaptersForm
          show={this.state.showChapters}
          onChapterSelect={this.onChapterSelect}
          chapters={this.state.chapters} />
        <ChapterView
          show={this.state.showChapText}
          text={this.state.chapterHTML}
          chapterNum={this.state.chapterNum}
          bookLength={this.state.chapters.length}
          onChapterSelect={this.onChapterSelect}/>
        <SearchResults
          show={this.state.showSearchResults}
          data={this.state.searchResults}
          onChapterSelect={this.onChapterSelect}/>
      </div>
    );
  }
}

export default App;
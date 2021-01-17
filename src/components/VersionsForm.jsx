import React from 'react';
import ChapterSelect from './ChapterSelect.jsx';
import ChapterText from './ChapterText.jsx';
import SearchForm from './SearchForm.jsx';
import SearchData from './SearchData.jsx';
const serverReqs = require('../serverReqs.js');
const $ = require('jquery');


class VersionsForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      bibles: [],
      version: null,
      books: [],
      chapters: null,
      chapterText: null,
      chapterInfo: null,
      searchData: []
    }
    this.onSearch = this.onSearch.bind(this);
    this.onChapterSelect = this.onChapterSelect.bind(this);
    this.onVersionSubmit = this.onVersionSubmit.bind(this);
  }

  componentDidMount() {
    serverReqs.getBiblesList()
      .then((data) => {
        this.setState({
          bibles: data[0].bibles,
          books: data[1].data,
        })
      })
  }

  onVersionSubmit (event) {
    event.preventDefault();
    $('#chapter-select').toggle();
    let versionValue = $('#versions').val();
    let bookValue = $('#books').val();

    let versionAbbrv = this.getAbbrv(this.state.bibles, versionValue, 'title', 'bible');
    let bookAbbrv = this.getAbbrv(this.state.books, bookValue, 'name', 'id');

    for (let bookObj of this.state.books) {
      if (bookObj['id'] === bookAbbrv) {
        let chaptersObj = {
          version: versionAbbrv,
          book: [bookValue, bookAbbrv],
          chapters: bookObj['chapters'].slice(1)
        }
        this.setState({
          chapters: chaptersObj
        })
      }
    }
  }

  onChapterSelect (chapObj, chapNum, toggle) {
    if (toggle) {
      $('#chapter-select').toggle(500);
    }
    $('#search-data').hide(500);
    $('#text').show();
    window.scrollTo(0,0);
    this.setState({
      chapterInfo: [chapObj, chapNum]
    });

    //get chapter info
    serverReqs.getChapterInfo(chapObj, chapNum)
      .then((data) => {
        this.setState({
          chapterText: data
        })
      })
  }

  onSearch (event, query, book) {
    //make api request to server at /api/search
    event.preventDefault();

    //animations and ui manipulation
    $('#chapter-select').hide(500);
    $('#text').hide(500);
    $('#search-data').slideToggle(500);


    let processedQuery = query.split(' ').join('%20');
    let version = $('#versions').val();
    let versionAbbrv = this.getAbbrv(this.state.bibles, version, 'title', 'bible');

    //get search results from biblia
    serverReqs.getSearchResults(versionAbbrv, processedQuery, book)
      .then((data) => {
        if (data.length === 0) {
          alert('Sorry, no results')
          $('#chapter-select').show(500);
        }
        this.setState({
          searchData: data
        })
        $('#search-data').show(500);
      })
  }

  //returns abbrv value for book name or version name
  getAbbrv (data, value, key1, key2) {
    for (let obj of data) {
      if (obj[key1] === value) {
        return obj[key2]
      }
    }
  }

  render() {
    //conditional rendering for chapters grid
    let chapterSelect;
    if (this.state.chapters) {
      chapterSelect = <ChapterSelect
      chaptersObj={this.state.chapters}
      onChapterSelect={this.onChapterSelect.bind(this)}
      onSearch={this.onSearch.bind(this)}/>
    } else {
      chapterSelect = <div></div>
    }

    return (
      <div>
        <div className="form-container">
          <form className ="form-item" id="form" onSubmit={()=>{this.onVersionSubmit(event)}}>
          <label>Select A Translation</label><br></br>
          <select id="versions">
            {this.state.bibles.map((bibleObj, index)=> {
              return <option id={bibleObj.abbreviatedTitle} key={index}>{bibleObj.title}</option>
            })}
          </select><br></br>

          <label>Select A Book</label><br></br>
          <select id="books">
            {this.state.books.map((bookObj, index)=> {
              return <option id={bookObj.id} key={index}>{bookObj.name}</option>
            })}
          </select><br></br>

          <button type="submit">Show Chapters</button>
          </form>
          <SearchForm onSubmit={this.onSearch}/><br></br>
        </div>
        {chapterSelect}
        <SearchData data={this.state.searchData}/>
        <ChapterText
          navClick={this.onChapterSelect.bind(this)}
          chapterInfo={this.state.chapterInfo}
          text={this.state.chapterText}/>
      </div>
    )
  }
}

export default VersionsForm;

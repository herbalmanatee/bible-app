import React from 'react';
import ChapterSelect from './ChapterSelect.jsx';
import ChapterText from './ChapterText.jsx';
const $ = require('jquery');


class VersionsForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      bibles: [],
      version: null,
      books: [],
      chapters: null,
      chapterText: null
    }
  }

  componentDidMount() {
    //get bible versions list from biblia api
    $.get({
      url: '/bibleForm',
      error: (err) => {
        console.log(err)
      },
      success: (data) => {
        this.setState({
          bibles: data[0],
          books: data[1],
        });
      }
    })
  }

  onVersionSubmit (event) {
    event.preventDefault();

    let versionValue = document.getElementById('versions').value
    let bookValue = document.getElementById('books').value

    let versionAbbrv = this.getAbbrv(this.state.bibles, versionValue, 'title', 'bible');
    let bookAbbrv = this.getAbbrv(this.state.books, bookValue, 'name', 'id');

    for (let bookObj of this.state.books) {
      if (bookObj['id'] === bookAbbrv) {
        let chaptersObj = {
          version: versionAbbrv,
          book: [bookValue, bookAbbrv],
          chapters: bookObj['chapters']
        }
        this.setState({
          chapters: chaptersObj
        })
      }
    }
  }

  onChapterSelect (obj) {
    console.log(obj);
    $.post({
      url: '/chapter',
      data: JSON.stringify(obj),
      contentType: 'application/json',
      dataType: 'html',
      err: (err) => {
        console.log(err)
      },
      success: (data) => {
        console.log(typeof data);
        // let html = $.parseHTML(data)
        this.setState({
          chapterText: data
        })
      }
    });
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
      chapterSelect = <ChapterSelect chaptersObj={this.state.chapters} onChapterSelect={this.onChapterSelect.bind(this)}/>
    } else {
      chapterSelect = <div></div>
    }

    return (
      <div>
      <form id="form" onSubmit={()=>{this.onVersionSubmit(event)}}>

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
    {chapterSelect}
    <ChapterText text={this.state.chapterText}/>
      </div>
    )
  }
}

export default VersionsForm;

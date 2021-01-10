import React from 'react';
const $ = require('jquery');
import ChapterSelect from './ChapterSelect.jsx';
import exampleData from '../exampleData.js';


class VersionsForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      bibles: exampleData.bibles["bibles"],
      version: null,
      books: exampleData.books["data"],
      chapters: null
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

    //get bible books list from api.bible

  }

  onVersionSubmit (event) {
    event.preventDefault();
    //let books
    let versionValue = document.getElementById('versions').value
    let bookValue = document.getElementById('books').value
    let versionAbbrv = this.getAbbrv(this.state.bibles, versionValue, 'title', 'bible');
    let bookAbbrv = this.getAbbrv(this.state.books, bookValue, 'name', 'id');
    console.log(versionAbbrv, bookAbbrv);
    for (let bookObj of this.state.books) {
      if (bookObj['id'] === bookAbbrv) {
        console.log('match')
        this.setState({
          chapters: bookObj
        })
      }
    }
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
      console.log('render');
      chapterSelect = <ChapterSelect name={this.state.chapters["name"]}chapters={this.state.chapters["chapters"]}/>
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
      <button type="submit">Submit</button>
    </form>
    {chapterSelect}
      </div>
    )
  }
}

export default VersionsForm;

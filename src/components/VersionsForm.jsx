import React from 'react';
const $ = require('jquery');


class VersionsForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      bibles: []
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
        // this.setState({
        //   bibles: data
        // });
        console.log(data);
      }
    })

    //get bible books list from api.bible

  }

  onVersionSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form>
      <label>Choose A Translation</label><br></br>
      <select id="versions">
        {this.state.bibles.map((bibleObj, index)=> {
          return <option id={bibleObj.abbreviatedTitle} key={index}>{bibleObj.title}</option>
        })}
      </select><br></br>
      <button type="submit">Submit</button>
    </form>
    )
  }
}

export default VersionsForm;

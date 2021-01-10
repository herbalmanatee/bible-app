import React from 'react';
const $ = require('jquery');


class VersionsForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      bibles: ['test', 'test2', 'test3']
    }
  }

  componentDidMount() {
    $.get({
      url: '/versions',
      error: (err) => {
        console.log(err)
      },
      success: (data) => {
        this.setState({
          bibles: data
        });
        console.log(data);
      }
    })
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
          return <option key={index}>{bibleObj.title}</option>
        })}
      </select><br></br>
      <button type="submit">Submit</button>
    </form>
    )
  }
}

export default VersionsForm;

import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      placeholder: true
    }
  }

  onVersionSubmit (event) {
    event.preventDefault();
    console.log('submitted')
  }

  render() {
    return (
      <div>
        <h1>Bible App</h1>
        <form onSubmit={()=>{this.onVersionSubmit(event)}}>
          <label>Choose A Translation</label><br></br>
          <select name="version" id="bible-versions">
            <option value="asv">American Standard Version</option>
            <option value="kjv">King James Version</option>
            <option value="geneva">Geneva</option>
          </select><br></br>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
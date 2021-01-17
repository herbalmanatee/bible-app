import React from 'react';
//import VersionsForm from './VersionsForm.jsx';
import MainForms from './MainForms.jsx';
import {getBiblesList} from '../serverReqs';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      bibles: [],
      books: []
    }
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

  render() {
    return (
      <div>
        <div className="header">
          <h1>Bible App</h1>
        </div>
        {/* <VersionsForm /> */}
        <MainForms
          books={this.state.books}
          bibles={this.state.bibles} />
      </div>
    );
  }
}

export default App;
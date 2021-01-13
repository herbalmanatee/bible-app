import React from 'react';
import VersionsForm from './VersionsForm.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      placeholder: true
    }
  }

  render() {
    return (
      <div>
        <div className="header">
          <h1>Bible App</h1>
        </div>
        <VersionsForm />
      </div>
    );
  }
}

export default App;
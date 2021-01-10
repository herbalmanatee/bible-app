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
        <h1>Bible App</h1>
        <VersionsForm />
      </div>
    );
  }
}

export default App;
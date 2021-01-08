import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      placeholder: true
    }
  }

  render() {
    return (
      <div>React is rendered</div>
    );
  }
}

export default App;
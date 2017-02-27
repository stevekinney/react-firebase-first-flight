import React, { Component } from 'react';
import firebase from './firebase';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React and Firebase</h2>
        </div>
        <p className="App-intro">
          { JSON.stringify(this.state.data, null, 2) }
        </p>
      </div>
    );
  }
}

export default App;

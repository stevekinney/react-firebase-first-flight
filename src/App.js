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

  componentWillMount() {
    firebase.database().ref().on('value', (snapshot) => {
      this.setState({
        data: snapshot.val()
      });
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React and Firebase</h2>
        </div>
        <pre className="App-data">
          { JSON.stringify(this.state.data, null, 2) }
        </pre>
      </div>
    );
  }
}

export default App;

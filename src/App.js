import React, { Component } from 'react';
import firebase from './firebase';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      newData: ''
    };

    this.dataRef = firebase.database().ref();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.dataRef.on('value', (snapshot) => {
      const data = Object.entries(snapshot.val())
                         .map(([ key, value ]) => ({ key, value }));
      this.setState({ data });
    });
  }

  handleChange(event) {
    this.setState({
      newData: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.dataRef.push(this.state.newData);
    this.setState({ newData: '' });
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
        <form className="App-form" onSubmit={this.handleSubmit}>
          <input value={this.state.newData} onChange={this.handleChange} />
          <input type="submit" disabled={!this.state.newData} />
        </form>
      </div>
    );
  }
}

export default App;

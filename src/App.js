import React, { Component } from 'react';
import './App.css';
import Todo from './components/todo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>It's simple to-do app</h1>
          <Todo/>
      </div>
    );
  }
}

export default App;

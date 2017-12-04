import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddArticalContainer from './containers/AddArticalContainer'
import ArticalListContainer from './containers/ArticalListContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddArticalContainer />
        <ArticalListContainer />
      </div>
    );
  }
}

export default App;

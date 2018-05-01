import React, { Component } from 'react';
import Nav from './components/NavComponent/Nav';
import Root from './components/Root';
import './index.css';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Root/>
      </div>
    );
  }
}

export default App;

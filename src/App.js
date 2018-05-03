import React, { Component } from 'react';
import Nav from './components/NavComponent/Nav';
import Root from './components/Root';
import Footer from './components/Footer';
import './index.css';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Root/>
        <Footer />
      </div>
    );
  }
}

export default App;

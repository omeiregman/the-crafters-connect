import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';


import Nav from './components/NavComponent/Nav';
import Root from './components/Root';
import Footer from './components/Footer';
import './index.css';


class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Router>
          <div>
            <Nav />
            <Root/>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

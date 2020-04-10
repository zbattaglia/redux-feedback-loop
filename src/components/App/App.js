import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Header from '../Header/Header';
import FeelingPage from '../Pages/FeelingPage/FeelingPage';
import UnderstandingPage from '../Pages/UnderstandingPage/UnderstandingPage';
import SupportPage from '../Pages/SupportPage/SupportPage';
import CommentsPage from '../Pages/CommentsPage/CommentsPage';
import ReviewPage from '../Pages/ReviewPage/ReviewPage';

class App extends Component {

  componentDidMount() {
    // this.props.history.push( '/' );
  }

  render() {
    return (
      <section className='App'>
        <Header />
        <Router>
          <Route exact path = '/' component={ FeelingPage } />
          <Route path = '/1' component={ UnderstandingPage } />
          <Route path = '/2' component={ SupportPage } />
          <Route path = '/3' component={ CommentsPage } />
          <Route path = '/4' component={ ReviewPage } />
        </Router>
      </section>
    );
  }
}

export default App;

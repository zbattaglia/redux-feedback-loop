import React, { Component } from 'react';
import { HashRouter as Router, Route, withRouter } from 'react-router-dom';
import './App.css';

import FeelingPage from '../Pages/FeelingPage/FeelingPage';
import UnderstandingPage from '../Pages/UnderstandingPage/UnderstandingPage';
import SupportPage from '../Pages/SupportPage/SupportPage';
import CommentsPage from '../Pages/CommentsPage/CommentsPage';
import ReviewPage from '../Pages/ReviewPage/ReviewPage';
import SuccessPage from '../Pages/SuccessPage/SuccessPage';

class App extends Component {

  // initial app startup should take us to the first page
  componentDidMount() {
    this.props.history.push( '/0' );
  }

  render() {
    return (
      <section className='App'>
        <Router>
          <Route exact path = '/0' component={ FeelingPage } />
          <Route path = '/1' component={ UnderstandingPage } />
          <Route path = '/2' component={ SupportPage } />
          <Route path = '/3' component={ CommentsPage } />
          <Route path = '/4' component={ ReviewPage } />
          <Route path = '/5' component={ SuccessPage } />
        </Router>
      </section>
    );
  }
}

export default withRouter(App);

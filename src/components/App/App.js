import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';

import Header from '../Header/Header';
import FeelingPage from '../Pages/FeelingPage/FeelingPage';
import UnderstandingPage from '../Pages/UnderstandingPage/UnderstandingPage';
import SupportPage from '../Pages/SupportPage/SupportPage';
import CommentsPage from '../Pages/CommentsPage/CommentsPage';
import ReviewPage from '../Pages/ReviewPage/ReviewPage';

class App extends Component {
  render() {
    return (
      <section className='App'>
        <Header />
        <FeelingPage />
        <UnderstandingPage />
        <SupportPage />
        <CommentsPage />
        <ReviewPage />
      </section>
    );
  }
}

export default App;

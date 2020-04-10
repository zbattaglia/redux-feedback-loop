import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';

import Header from '../Header/Header';
import PageOne from '../Pages/PageOne/PageOne';
import PageTwo from '../Pages/PageTwo/PageTwo';
import PageThree from '../Pages/PageThree/PageThree';
import PageFour from '../Pages/PageFour/PageFour';

class App extends Component {
  render() {
    return (
      <section className='App'>
        <Header />
        <PageOne />
        <PageTwo />
        <PageThree />
        <PageFour />
      </section>
    );
  }
}

export default App;

import React, { Component } from 'react';
import NextButton from '../../NextButton/NextButton';
import { withRouter } from 'react-router-dom';

class UnderstandingPage extends Component {

  render() {
    return (
        <section className="feedbackBody">
            <header>
                <p>How well are you undestanding the content?</p>
            </header>
            <form>
                <input type="number" placeholder="Understanding?"></input>
                <NextButton />
            </form>
        </section>
    );
  }
}

export default withRouter( UnderstandingPage );
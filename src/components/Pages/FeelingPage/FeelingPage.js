import React, { Component } from 'react';
import NextButton from '../../NextButton/NextButton';
import { withRouter } from 'react-router-dom';

class FeelingPage extends Component {

  render() {
    return (
        <section className="feedbackBody">
            <header>
                <p>How are you feeling today?</p>
            </header>
            <form>
                <input type="number" placeholder="Feeling?"></input>
                <NextButton />
            </form>
        </section>
    );
  }
}

export default withRouter( FeelingPage );
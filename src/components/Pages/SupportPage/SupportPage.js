import React, { Component } from 'react';
import NextButton from '../../NextButton/NextButton';
import { withRouter } from 'react-router-dom';

class SupportPage extends Component {

  render() {
    return (
        <section className="feedbackBody">
            <header>
                <p>How well are you being supported?</p>
            </header>
            <form>
                <input type="number" placeholder="Support?"></input>
                <NextButton />
            </form>
        </section>
    );
  }
}

export default withRouter( SupportPage );
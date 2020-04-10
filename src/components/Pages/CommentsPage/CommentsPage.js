import React, { Component } from 'react';
import NextButton from '../../NextButton/NextButton';
import { withRouter } from 'react-router-dom';

class CommentsPage extends Component {

  render() {
    return (
        <section className="feedbackBody">
            <header>
                <p>Any comments you want to leave?</p>
            </header>
            <form>
                <input type="text" placeholder="Comments"></input>
                <NextButton />
            </form>
        </section>
    );
  }
}

export default withRouter( CommentsPage );
import React, { Component } from 'react';
import NextButton from '../../NextButton/NextButton';
import { withRouter } from 'react-router-dom';
import Header from '../../Header/Header';
import BackButton from '../../BackButton/BackButton';

class CommentsPage extends Component {

  // Initial state is N/A in case they have no comments to leave.
  state = {
    type: 'comments',
    response: 'N/A',
  }

  onChange = ( event ) => {
    console.log( 'Got a change', event.target.value );
    this.setState({
      ...this.state,
      response: event.target.value,
    });
  }

  render() {
    return (
        <section className="feedbackBody">
            <Header />
            <header>
                <p>Any comments you want to leave?</p>
            </header>
            <form>
                <input type="text" placeholder="Comments" onChange={ this.onChange }></input>
                <NextButton response={ this.state }/>
                <BackButton />
            </form>
        </section>
    );
  }
}

export default withRouter( CommentsPage );
import React, { Component } from 'react';
import NextButton from '../../NextButton/NextButton';
import { withRouter } from 'react-router-dom';
import Header from '../../Header/Header';

class UnderstandingPage extends Component {

  // initial state is empty
  state = {
    type: 'Understanding',
    response: '',
  }
  
  // on change update the state to track current value
  // This gets passed to NextButton as a prop for input validation
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
                <p>How well are you understanding the content?</p>
            </header>
            <form>
                <input type="number" placeholder="Understanding?" onChange={ (event) => this.onChange( event ) }></input>
                <NextButton response={ this.state }/>
            </form>
        </section>
    );
  }
}

export default withRouter( UnderstandingPage );
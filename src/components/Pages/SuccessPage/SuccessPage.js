import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import SuccessHeader from '../../Header/SuccessHeader';

class SuccessPage extends Component {

  render() {
    return (
        <section className="successPage">
          <SuccessHeader />
          <p>Thank You!</p>
          <button>Leave New Feedback</button>
        </section>
    );
  }
}

export default withRouter( SuccessPage );
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import SuccessHeader from '../../Header/SuccessHeader';
import {connect} from 'react-redux';

class SuccessPage extends Component {

  handleClick = () => {
    console.log( 'Submit new feedback' );
    this.props.dispatch({ type: 'NEW_FEEDBACK' });
    this.props.history.push( `/`)
  };

  render() {
    return (
        <section className="successPage">
          <SuccessHeader />
          <p>Thank You!</p>
          <button onClick={ this.handleClick }>Leave New Feedback</button>
        </section>
    );
  }
}

const mapStateToProps = (reduxStore) => ({

  feedback: reduxStore.changePage.feedback,

})

export default withRouter(connect( mapStateToProps )(SuccessPage));
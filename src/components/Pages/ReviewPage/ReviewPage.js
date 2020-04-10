import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import Header from '../../Header/Header';
import BackButton from '../../BackButton/BackButton';

class ReviewPage extends Component {

    handleSubmit = ( event ) => {
        event.preventDefault();
        // console.log(
        console.log( 'Got feedback submit' );
        
        axios.post( '/feedback', this.props.feedback )
            .then( (response) => {
                console.log( 'Posted feedback to the server' );
                this.props.history.push( `/${ this.props.nextPage.page + 1 }`)
            })
            .catch( (error) => {
                alert( `Couldn't submit feedback.` );
                console.log( 'Error POSTING to the server', error );
            }) 

    }; // end handleSubmit 

  render() {
    return (
        <section className="feedbackBody">
            <Header />
            <p>{ JSON.stringify(this.props.feedback)}</p>
            <header>
                <p>Review Your Feedback</p>
            </header>
             <div className="feedback">
                 <p>Placeholder for review</p>
             </div>
             <br />
            <form>
                <BackButton />
                <button onClick={ this.handleSubmit }>Submit</button> 
            </form>
        </section>
    );
  }
}

const mapStateToProps = (reduxStore) => ({

    feedback: reduxStore.changePage.feedback,
    nextPage: reduxStore.changePage,
  
  })
  
  export default withRouter(connect( mapStateToProps )(ReviewPage));
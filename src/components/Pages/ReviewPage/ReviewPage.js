import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';

class ReviewPage extends Component {

    handleSubmit = ( event ) => {
        event.preventDefault();
        // console.log(
        console.log( 'Got feedback submit' );
        
        axios.post( '/feedback', this.props.feedback )
            .then( (response) => {
                console.log( 'Posted feedback to the server' );

            })
            .catch( (error) => {
                alert( `Couldn't submit feedback.` );
                console.log( 'Error POSTING to the server', error );
            }) 

    }; // end handleSubmit 

  render() {
    return (
        <section className="feedbackBody">
            <header>
                <p>Review Your Feedback</p>
            </header>
             <div className="feedback">
                 <p>Placeholder for review</p>
             </div>
             <br />
            <form>
                <button onClick={ this.handleSubmit }>Submit</button> 
            </form>
        </section>
    );
  }
}

const mapStateToProps = (reduxStore) => ({

    feedback: reduxStore.changePage.feedback,
  
  })
  
  export default withRouter(connect( mapStateToProps )(ReviewPage));
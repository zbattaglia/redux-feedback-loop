import React, { Component } from 'react';
import './FeedbackList.css';
import { connect } from 'react-redux';

class FeedbackList extends Component {
    render(){
        return (
            <div id="feedbackList">
                { this.props.feedback.map( (response, index) =>
                    <p key={index}>{ response.type }: { response.response }</p>
                )}
            </div>
        )
    }
}

const putReduxStateOnProps = ( reduxStore ) => ({

    feedback: reduxStore.feedback,
  
  });

export default connect( putReduxStateOnProps )(FeedbackList);
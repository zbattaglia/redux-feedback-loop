import React, { Component } from 'react';

import { connect } from 'react-redux';

class FeedbackList extends Component {
    render(){
        return (
            <div>
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
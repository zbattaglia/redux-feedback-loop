import React, { Component } from 'react';
// import axios from 'axios';
import { withRouter } from 'react-router-dom';
import AdminHeader from '../../Header/AdminHeader';
import '../Pages.css';
import FeedbackTable from '../../FeedbackTable/FeedbackTable';
import axios from 'axios';
import {connect} from 'react-redux';
// import { withStyles } from '@material-ui/core/styles';
  

class AdminPage extends Component {

    // on page load, get Feedback from database and render
    componentDidMount() {
        this.getFeedback();
    }; // end componentDidMount

    // get feedback and set to redux state
    getFeedback =() => {
        axios.get( '/feedback' )
            .then( (response) => {
                console.log( 'Got Feedback', response.data );
                this.props.dispatch({ type: 'SET_FEEDBACK', payload: response.data });
            })
            .catch( (error) => {
                console.log( 'Error GETTING feedback', error );
            })
    }; // end getFeedback

  render() {
    return (
        <>
            <AdminHeader />
            <FeedbackTable />
        </>
    );
  }
}
  
  export default withRouter( connect()(AdminPage) );
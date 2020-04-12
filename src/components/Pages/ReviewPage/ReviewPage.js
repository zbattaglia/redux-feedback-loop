import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import Header from '../../Header/Header';
import BackButton from '../../BackButton/BackButton';
import FeedbackList from '../../FeedbackList/FeedbackList';
import '../Pages.css';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    card: {
      minWidth: 500,
      minHeight: 300,
      display: 'inline-block',
      marginTop: '7rem',
      boxShadow: '0 16px 70px -12px',
    },
    button: {
        margin: theme.spacing.unit,
    }
  });
  

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
    const classes = this.props.classes;
    return (
        <>
            <Header />
            <Card className = {classes.card }>
                <CardHeader title="Review Your Feedback"></CardHeader>
                 <FeedbackList />
            <CardActions>
                <div id="buttons">
                    <BackButton />
                    <Button variant="contained" color="primary" className={ classes.button } onClick={ this.handleSubmit }>Submit</Button>
                </div>
            </CardActions>
            </Card>
        </>
    );
  }
}

const putReduxStateOnProps  = (reduxStore) => ({

    feedback: reduxStore.feedback,
    nextPage: reduxStore.changePage,
  
  })
  
  export default withRouter( connect( putReduxStateOnProps )(withStyles(styles)( ReviewPage )) );
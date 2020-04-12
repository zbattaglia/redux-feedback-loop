import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import SuccessHeader from '../../Header/SuccessHeader';
import {connect} from 'react-redux';
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

class SuccessPage extends Component {

  handleClick = () => {
    console.log( 'Submit new feedback' );
    this.props.dispatch({ type: 'NEW_FEEDBACK' });
    this.props.history.push( `/0`)
  };

  render() {
    const classes = this.props.classes;
    return (
        <>
          <SuccessHeader />
          <Card className={ classes.card }>
            <CardHeader title="Thank You!"></CardHeader>
            <div  id="newFeedback">
              <Button variant="contained" color="primary" className={ classes.button } onClick={ this.handleClick }>Leave New Feedback</Button>
            </div>          
          </Card>
        </>
    );
  }
}

const putReduxStateOnProps = (reduxStore) => ({

  feedback: reduxStore.changePage.feedback,

})

export default withRouter( connect( putReduxStateOnProps )(withStyles(styles)( SuccessPage )) );
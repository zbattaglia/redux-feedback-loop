import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import ArrowForward from '@material-ui/icons/ArrowForward'

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    }
});

// Made a component for next button since it is used for the exact same function multiple times throughout the code
class NextButton extends Component {

    // on click of next button dispatch an action of NEXT_PAGE to the router
    // This is stored on redux state so the back page can change the current page number as well
    // route from our current page address to the next page
    handleClick = ( event ) => {
        event.preventDefault();
        console.log( 'Got a Next', this.props.nextPage );
        // gets response passed as a prop from the current page and checks for a non-empty input for input validation
        // on valid response changes to next page and puts response on redux state
        if( this.props.response.response !== '' ) {
            this.props.dispatch({ type: 'NEXT_PAGE', payload: this.props.response });
            this.props.history.push( `/${ this.props.nextPage.page + 1 }`)
        }
        else {
            alert( 'Please provide a response.' );
        }
    }

    render() {
        const classes = this.props.classes;
        return (
            <Button variant="contained"  className={classes.button} onClick = { this.handleClick }>NEXT<ArrowForward /></Button>
        );
    }
}

const putReduxStateOnProps = ( reduxStore ) => ({

    nextPage: reduxStore.changePage,
  
  });

export default withRouter( connect( putReduxStateOnProps )(withStyles(styles)( NextButton )) );
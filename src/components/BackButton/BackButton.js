import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import ArrowBack from '@material-ui/icons/ArrowBack'

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    }
});


// Made a component for next button since it is used for the exact same function multiple times throughout the code
class BackButton extends Component {

    // on click of back button dispatch an action of PREVIOUS_PAGE to the router
    // This is stored on redux state so the back page can change the current page number as well
    // route from our current page address to the next page
    handleClick = ( event ) => {
        event.preventDefault();
        this.props.dispatch({ type: 'PREVIOUS_PAGE' });
        this.props.history.push( `/${ this.props.page - 1 }`)
    }

    render() {
        const classes = this.props.classes;
        return (
            <Button variant="contained" className={classes.button} onClick = { this.handleClick }><ArrowBack />BACK</Button>
        );
    }
}

const putReduxStateOnProps = ( reduxStore ) => ({

    page: reduxStore.changePage.page,
  
  });

export default withRouter( connect( putReduxStateOnProps )(withStyles(styles)( BackButton )) );
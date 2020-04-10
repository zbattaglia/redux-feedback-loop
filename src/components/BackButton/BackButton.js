import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';


// Made a component for next button since it is used for the exact same function multiple times throughout the code
class BackButton extends Component {

    // on click of back button dispatch an action of PREVIOUS_PAGE to the router
    // This is stored on redux state so the back page can change the current page number as well
    // route from our current page address to the next page
    handleClick = ( event ) => {
        event.preventDefault();
        this.props.dispatch({ type: 'PREVIOUS_PAGE' });
        if( this.props.page === 1 ){
            this.props.history.push( `/`)
        }
        else {
            this.props.history.push( `/${ this.props.page - 1 }`)
        }
    }

    render() {
        return (
            <button onClick = { this.handleClick }>BACK</button>
        );
    }
}

const putReduxStateOnProps = ( reduxStore ) => ({

    page: reduxStore.changePage.page,
  
  });

export default withRouter( connect( putReduxStateOnProps )( BackButton ) );
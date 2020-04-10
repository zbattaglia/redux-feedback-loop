import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';


// Made a component for next button since it is used for the exact same function multiple times throughout the code
class NextButton extends Component {

    // on click of next button dispatch an action of NEXT_PAGE to the router
    // This is stored on redux state so the back page can change the current page number as well
    // route from our current page address to the next page
    handleClick = ( event ) => {
        event.preventDefault();
        console.log( 'Got a Next', this.props.nextPage );
        this.props.dispatch({ type: 'NEXT_PAGE' });
        this.props.history.push( `/${ this.props.nextPage.page + 1 }`)
    }

    render() {
        return (
            <button onClick = { this.handleClick }>NEXT</button>
        );
    }
}

const putReduxStateOnProps = ( reduxStore ) => ({

    nextPage: reduxStore.changePage,
  
  });

export default withRouter( connect( putReduxStateOnProps )( NextButton ) );
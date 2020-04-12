import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    }
});

class Flag extends Component {

    toggleFlag = ( event ) => {
        event.preventDefault();
        let id = this.props.flagId;
        console.log( 'toggle flag', id );

        axios.put( `/feedback/flag/${id}` )
            .then( (result) => {
                console.log( 'ToggledFlag' );
                this.props.getFeedback();
            })
            .catch( (error) => {
                console.log( 'Error updating database', error );
            })
    }

    showFlag(){
        const classes = this.props.classes;
        if( this.props.flagged === true ) {
            return <p>Requires Further Review<br /><Button variant="contained" color="primary" className={ classes.button } onClick={ this.toggleFlag }>Complete</Button></p>
        }
        else {
            return <Button variant="contained" color="secondary" className={ classes.button } onClick={ (event) => this.toggleFlag( event )}>Flag For Review</Button>
        }
    }

    render() {
        return (
            <>
                { this.showFlag() }
            </>
        )
    }

}

export default withStyles(styles)( Flag );
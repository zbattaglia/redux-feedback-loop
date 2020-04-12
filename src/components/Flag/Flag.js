import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    }
});

class Flag extends Component {

    toggleFlag = () => {
        console.log( 'toggle flag' );
    }

    showFlag(){
        const classes = this.props.classes;
        if( this.props.flagged ) {
            return <p>Requires Further Review<br /><Button variant="contained" color="primary" className={ classes.button } onClick={ this.toggleFlag }>Complete</Button></p>
        }
        else {
            return <Button variant="contained" color="secondary" className={ classes.button } onClick={ this.toggleFlag }>Flag</Button>
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
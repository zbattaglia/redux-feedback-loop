import React, { Component } from 'react';
import NextButton from '../../NextButton/NextButton';
import { withRouter } from 'react-router-dom';
import Header from '../../Header/Header';
import BackButton from '../../BackButton/BackButton';
import TextField from '@material-ui/core/TextField';
//card imports
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';

const styles = theme => ({
  card: {
    minWidth: 500,
    minHeight: 300,
    display: 'inline-block',
    marginTop: '7rem',
    boxShadow: '0 16px 70px -12px',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 250,
  },
});

class SupportPage extends Component {

  // initial state is empty
  state = {
    type: 'support',
    response: '',
  }
  
  // on change update the state to track current value
  // This gets passed to NextButton as a prop for input validation
  onChange = ( event ) => {
    console.log( 'Got a change', event.target.value );
    this.setState({
      ...this.state,
      response: event.target.value,
    });
  }

  render() {
    const classes = this.props.classes;
    return (
        <>
          <Header />
          <Card className={ classes.card }>
            <CardHeader title="How well are you being supported?"></CardHeader>
            <form>
              <div id="input">
                <TextField required id="standard-required" type="number" label="Support?" className={ classes.textField } onChange={ (event) => this.onChange( event ) }></TextField>
              </div>
              <CardActions>
                <div id="buttons">
                  <BackButton />
                  <NextButton response={ this.state }/>
                </div>
              </CardActions>
            </form>
          </Card>
        </>
    );
  }
}

export default withRouter( (withStyles(styles)(SupportPage)) );
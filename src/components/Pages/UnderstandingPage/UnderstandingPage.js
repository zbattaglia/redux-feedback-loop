import React, { Component } from 'react';
import NextButton from '../../NextButton/NextButton';
import { withRouter } from 'react-router-dom';
import Header from '../../Header/Header';
import BackButton from '../../BackButton/BackButton';
import '../Pages.css';
import TextField from '@material-ui/core/TextField';
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

class UnderstandingPage extends Component {

  // initial state is empty
  state = {
    type: 'understanding',
    response: '',
  }
  
  // on change update the state to track current value
  // This gets passed to NextButton as a prop for input validation
  onChange = ( event ) => {
    console.log( 'Got a change', event.target.value );
    if( Number( event.target.value ) < 0 || Number( event.target.value > 5 ) ){
      alert( 'Response must be 0 to 5' );
      this.setState({
        ...this.state,
        response: '',
      })
    }
    else {
      this.setState({
        ...this.state,
        response: event.target.value,
      });
    }
  }

  render() {
    const classes = this.props.classes;
    return (
        <>
          <Header />
          <Card className={classes.card}>
            <CardHeader title="How well are you understanding the content?"></CardHeader>
            <form>
              <div id="input">
                <TextField value = { this.state.response } required id="standard-required" type="number" label="Understanding (0-5) Required" className={ classes.textField } onChange={ (event) => this.onChange( event ) }></TextField>
              </div>
              <CardActions>
                <div id="buttons">
                  <BackButton />
                  <NextButton response={ this.state } />
                </div>
              </CardActions>
            </form>
          </Card>
        </>
    );
  }
}

export default withRouter( (withStyles(styles)(UnderstandingPage)) );
import React, { Component } from 'react';
import NextButton from '../../NextButton/NextButton';
import { withRouter } from 'react-router-dom';
import Header from '../../Header/Header';
import '../Pages.css';
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

class FeelingPage extends Component {

  // initial state is empty
  state = {
    type: 'feeling',
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
            <CardHeader title="How are you feeling today?"></CardHeader>
            <div id="input">
                <TextField value={ this.state.response } required id="standard-required" type="number" label="Feeling (0 - 5) Required" className={ classes.textField } onChange={ (event) => this.onChange( event ) }></TextField>
            </div>
            <CardActions>
              <div id="next">
                <NextButton response={ this.state } />
              </div>
            </CardActions>
        </Card>
      </>
    );
  }
}

export default withRouter( (withStyles(styles)(FeelingPage)) );

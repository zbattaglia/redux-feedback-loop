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

class CommentsPage extends Component {

  // Initial state is N/A in case they have no comments to leave.
  state = {
    type: 'comments',
    response: 'N/A',
  }

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
            <CardHeader title="Any comments you want to leave?"></CardHeader>
            <form>
              <div id="input">
                <TextField id="standard" type="text" label="Comments" className={ classes.textField } onChange={ this.onChange }></TextField>
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

export default withRouter( (withStyles(styles)(CommentsPage)) );

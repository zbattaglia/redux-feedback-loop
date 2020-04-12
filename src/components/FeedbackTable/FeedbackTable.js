import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Delete from '@material-ui/icons/DeleteTwoTone';
import {connect} from 'react-redux';
import Flag from '../Flag/Flag';
import axios from 'axios';

// Table styling
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  table: {
    minWidth: 20,
    width: '60rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
    marginTop: 10,
    border: 'solid',
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

function FeedbackTable (props) {

  const handleDelete = ( event, id ) => {
    console.log( 'Got a delete', id );
    axios.delete( `/feedback/${id}`)
      .then( (response) => {
        console.log( 'Deleted row' );
        props.getFeedback();
      })
      .catch( (error) => {
        console.log( 'Error deleting row', error );
      })

  };

  const classes= props.classes;

  return (
    <>
    <p>**DELETE's cannot be undone. Feeback requiring further review is sorted to the top of the table.</p>
      <Table className={ classes.table }>
        <TableHead>
          <TableRow>
            <CustomTableCell>Feeling</CustomTableCell><CustomTableCell>Comprehension</CustomTableCell>
            <CustomTableCell>Support</CustomTableCell><CustomTableCell>Comments</CustomTableCell>
            <CustomTableCell>Delete</CustomTableCell><CustomTableCell>Flagged?</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.feedback.map(response => 
            <TableRow key={response.id}>
              <CustomTableCell>{ response.feeling }</CustomTableCell>
              <CustomTableCell>{ response.understanding }</CustomTableCell>
              <CustomTableCell>{ response.support }</CustomTableCell>
              <CustomTableCell>{ response.comments }</CustomTableCell>
              <CustomTableCell>
                <Button className={ classes.button } onClick={ ( event ) => handleDelete( event, response.id ) }><Delete /></Button>
              </CustomTableCell>
              <CustomTableCell><Flag flagId={ response.id } flagged={ response.flagged } getFeedback={ props.getFeedback } /></CustomTableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
}

const putReduxStateOnProps = (reduxStore) => ({
  feedback: reduxStore.feedbackHistory,
});

export default connect( putReduxStateOnProps )(withStyles(styles)( FeedbackTable ));
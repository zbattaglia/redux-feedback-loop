import React, { Component } from 'react';
// import axios from 'axios';
import { withRouter } from 'react-router-dom';
import AdminHeader from '../../Header/AdminHeader';
import '../Pages.css';
// import { withStyles } from '@material-ui/core/styles';
  

class AdminPage extends Component {

  render() {
    return (
        <>
            <AdminHeader />
        </>
    );
  }
}
  
  export default withRouter( AdminPage );
import React, { Component } from 'react';
import './Header.css';

class SuccessHeader extends Component {
  render() {
    return (
        <div className="success">
            <header className="success-header">
                <h1 className="success-title">Feedback!</h1>
            </header>
        </div>
    );
  }
}

export default SuccessHeader;
import React, { Component } from 'react';

class SupportPage extends Component {
  render() {
    return (
        <section className="feedbackBody">
            <header>
                <p>How well are you being supported?</p>
            </header>
            <form>
                <input type="number" placeholder="Support?"></input>
                <button>NEXT</button> 
            </form>
        </section>
    );
  }
}

export default SupportPage;
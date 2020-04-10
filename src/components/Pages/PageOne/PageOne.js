import React, { Component } from 'react';

class PageOne extends Component {
  render() {
    return (
        <section className="feedbackBody">
            <header>
                <p>How are you feeling today?</p>
            </header>
            <form>
                <input type="number" placeholder="Feeling?"></input>
                <button>NEXT</button> 
            </form>
        </section>
    );
  }
}

export default PageOne;
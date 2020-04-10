import React, { Component } from 'react';

class PageTwo extends Component {
  render() {
    return (
        <section className="feedbackBody">
            <header>
                <p>How well are you undestanding the content?</p>
            </header>
            <form>
                <input type="number" placeholder="Understanding?"></input>
                <button>NEXT</button> 
            </form>
        </section>
    );
  }
}

export default PageTwo;
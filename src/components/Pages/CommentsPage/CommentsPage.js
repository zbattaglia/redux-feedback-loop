import React, { Component } from 'react';

class CommentsPage extends Component {
  render() {
    return (
        <section className="feedbackBody">
            <header>
                <p>Any Comments you want to leave?</p>
            </header>
            <form>
                <input type="text" placeholder="Comments"></input>
                <button>NEXT</button> 
            </form>
        </section>
    );
  }
}

export default CommentsPage;
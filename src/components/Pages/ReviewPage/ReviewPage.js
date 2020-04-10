import React, { Component } from 'react';

class ReviewPage extends Component {
  render() {
    return (
        <section className="feedbackBody">
            <header>
                <p>Review Your Feedback</p>
            </header>
             <div className="feedback">
                 <p>Placeholder for review</p>
             </div>
             <br />
            <form>
                <button>Submit</button> 
            </form>
        </section>
    );
  }
}

export default ReviewPage;
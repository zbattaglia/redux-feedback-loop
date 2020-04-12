import React, { Component } from 'react';

class Flag extends Component {

    toggleFlag = () => {
        console.log( 'toggle flag' );
    }

    showFlag(){
        if( this.props.flagged ) {
            return <p>Requires Further Review<br /><button onClick={ this.toggleFlag }>Complete</button></p>
        }
        else {
            return <button onClick={ this.toggleFlag }>Flag</button>
        }
    }

    render() {
        return (
            <>
                { this.showFlag() }
            </>
        )
    }

}

export default Flag;
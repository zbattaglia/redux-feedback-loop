import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter as Router } from 'react-router-dom';

//Bring in Redux Logger
import logger from 'redux-logger';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

// changePage to go forward and backward from button click action
// initial page is 0
const changePage = (state = { feedback: [], page: 0 }, action) => {
    // if action is from a next button, page increments
    if( action.type === 'NEXT_PAGE' ){ 
        const updatedState = { feedback: [ ...state.feedback, action.payload ], page: state.page + 1 }
        return updatedState;
    }
    if( action.type === 'NEW_FEEDBACK' ){
        const updatedState = { feedback: [], page: 0 };
        return updatedState;
    }
    return state
}

const storeInstance = createStore(
    combineReducers({
        changePage,
    }),
    //Add our middleware logger
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={storeInstance}><Router><App /></Router></Provider>, document.getElementById('root'));
registerServiceWorker();

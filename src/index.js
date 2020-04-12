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
const changePage = (state = { page: 0 }, action ) => {
    // if action is from a next button, page increments
    if( action.type === 'NEXT_PAGE' ){ 
        const updatedState = { page: state.page + 1 }
        return updatedState;
    }
    if( action.type === 'PREVIOUS_PAGE' ){
        const updatedState = { page: state.page - 1 }
        return updatedState;
    }
    if( action.type === 'NEW_FEEDBACK' ){
        const updatedState = { page: 0 };
        return updatedState;
    }
    return state
}

const feedback = (state = [], action) => {
    if( action.type === 'NEXT_PAGE' ){ 
        const updatedState = [ ...state, action.payload ];
        return updatedState;
    }
    if( action.type === 'PREVIOUS_PAGE' ){
        state.pop();
        const updatedState = state;
        return updatedState;
    }
    if( action.type === 'NEW_FEEDBACK' ){
        const updatedState = [];
        return updatedState;
    }
    return state;
}

const feedbackHistory = ( state = [], action ) => {
    if( action.type === 'SET_FEEDBACK' ){
        return action.payload;
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        changePage,
        feedback,
        feedbackHistory,
    }),
    //Add our middleware logger
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={storeInstance}><Router><App /></Router></Provider>, document.getElementById('root'));
registerServiceWorker();

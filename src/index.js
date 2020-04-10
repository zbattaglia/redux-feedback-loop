import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

//Bring in Redux Logger
import logger from 'redux-logger';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const changePage = (state = { page: 0 }, action) => {
    if( action.type === 'NEXT_PAGE' ){ 
        const updatedState = { page: state.page + 1 }
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

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

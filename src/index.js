import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import articalApp from './reducers'
import { Provider } from 'react-redux'
import { requestArticles } from './actions/index';

import createSagaMiddleware from 'redux-saga'
import rootSaga from './middleware/articleMiddleware'

const sagaMiddleware = createSagaMiddleware();

let store = createStore(
    articalApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store = {store}>
        <App onFetchArticles={() => store.dispatch(requestArticles())}/>
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();

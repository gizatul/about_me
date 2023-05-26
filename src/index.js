import React from 'react';
import ReactDOM from 'react-dom/client';
import createSagaMiddleware from 'redux-saga';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './redux/reducer';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { sagaWatcher } from './redux/sagas';

const saga = createSagaMiddleware();

const store = createStore(reducer, compose(applyMiddleware(saga), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

saga.run(sagaWatcher);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);

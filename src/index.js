import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// importing the function component
import App from './App';
import * as serviceWorker from './serviceWorker';


// render the App component using the 'render()' method
// and mount it in 'root' DOM element on index.html
ReactDOM.render( < App / > , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
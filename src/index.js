import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
// importing the function component
//import App from './App';
import * as serviceWorker from './serviceWorker';
import ValidationExComponent from './classcomponents/ValidationExComponent';
import StateHookComponent from './hooks/statehook';

// import SimpleComponent from './classcomponents/simplecomponent';
// import ParentComponent from './classcomponents/parentchild';
// import ParentDemoComponent from './classcomponents/parentchilddemo';
// import UnControlledComponent from './classcomponents/uncontrolledcomponent';
// import StudentComponent from './classcomponents/studentcomponent/studentcomponent';
// import LifeCycleComponent from './classcomponents/lifecycle';



// render the App component using the 'render()' method
// and mount it in 'root' DOM element on index.html
ReactDOM.render( < StateHookComponent/ > , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
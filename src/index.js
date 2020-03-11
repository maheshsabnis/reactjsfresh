import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
// importing the function component
//import App from './App';
import * as serviceWorker from './serviceWorker';
// import AccessibilityComponent from './adv/accessibility';
//import ValidationExComponent from './classcomponents/ValidationExComponent';
//import StateHookComponent from './hooks/statehook';
// import StudentHookComponent from './hooks/objecthooks';

// import SimpleComponent from './classcomponents/simplecomponent';
// import ParentComponent from './classcomponents/parentchild';
// import ParentDemoComponent from './classcomponents/parentchilddemo';
// import UnControlledComponent from './classcomponents/uncontrolledcomponent';
// import StudentComponent from './classcomponents/studentcomponent/studentcomponent';
// import LifeCycleComponent from './classcomponents/lifecycle';

 import MainComponent from './routingapp/MainComponent';
import ApplicationComponent from './routingdemo/ApplicationComponent';
// import CodeSpiltComponent from './adv/codesplit';
//import DynamicLoadingComponent from './adv/codesplit/LoadDynamicComponent';
//import { Companies, Stocks } from './models/constants';
//import CompanyComponent from './hoc/CompanyComponent';
//import StockComponent from './hoc/StockComponent';
//import HoC from './hoc/HocComponent'; 
// import Sidebar from './adv/ErrorBoundry/Demo';
// return the CompanyInfoComponent based on Companies data passed
// to the CompanyComponent
//const CompanyInfoComponent = HoC(CompanyComponent, Companies);
//const StockInfoComponent =  HoC(StockComponent, Stocks);


ReactDOM.render(
    <BrowserRouter>
        <ApplicationComponent />
    </BrowserRouter>
    , document.getElementById('root')
);

// render the App component using the 'render()' method
// and mount it in 'root' DOM element on index.html
 // ReactDOM.render( < Sidebar / > , document.getElementById('root'));

// ReactDOM.render( <div> <CompanyInfoComponent/> <hr/> <StockInfoComponent/> </div> , document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
import React from 'react';
import ReactDOM from 'react-dom';
// import createStore
import { createStore } from 'redux';
// the Provider will provide teh store to all components
// scoped with it.
import { Provider } from 'react-redux';


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
import StudentComponent from './classcomponents/studentcomponent/studentcomponent';
// import LifeCycleComponent from './classcomponents/lifecycle';

// import MainComponent from './routingapp/MainComponent';
// import ApplicationComponent from './routingdemo/ApplicationComponent';
// import MyComponent from './testcomponent';
// import ReaduxComponent from './reduxapp/ReduxComponent';

// create a store using reducer
// import reducer (note that the exported combineReducer object can be diretly instantiated
// in 'reducer')
import reducer from './reduxapp/reducers/reducers';
import OrderedList from './componentsfortest/OrderList';
import Login from './componentsfortest/Login';
import StudentServiceComponent from './classcomponents/studentcomponent/studentservicecomponent';
import SecureCallComponent from './classcomponents/securecallcomponent';
import UseEffectForAjaxComponent from './hooks/useeffectsahax';
import UseEffectWithMouseEvent from './hooks/useEffectWithMouse';

let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

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


// ReactDOM.render(
//     <BrowserRouter>
//         <ApplicationComponent />
//     </BrowserRouter>
//     , document.getElementById('root')
// );

// render the App component using the 'render()' method
// and mount it in 'root' DOM element on index.html

// subscribe the store to the ReaducComponents using 
// 'Provider' component and pass store to it
// all components, inside the <Provider></Provider>
// will have access to 'dispatch()' method to the store to dispatch 
// actions those will cause state in store to update
// ReactDOM.render( <Provider store={store}>
//             < ReaduxComponent / >
//     </Provider> , document.getElementById('root'));

// ReactDOM.render( <div> <CompanyInfoComponent/> <hr/> <StockInfoComponent/> </div> , document.getElementById('root'));

ReactDOM.render( < UseEffectWithMouseEvent / > , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
import React, { Component } from 'react';
import {Route,Link, Redirect, Switch} from 'react-router-dom';

import HomeComponent from './HomeComponent';
import AboutComponent from './AboutComponent';
import ContactComponent from './ContactComponent';

class ApplicationComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            id:1000
        }
    }
    render() { 
        return (
            <div className="container">
                <table className="table table-bordered table-striped table-dark">
                    <thead>
                       <tr>
                         <th colSpan="3">
                              <strong>The Routing Application</strong>
                         </th>
                       </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                              <Link to="/">Home</Link>
                            </td>
                            <td>
                              <Link to={`/about/${this.state.id}`}>About</Link>
                            </td>
                            <td>
                              <Link to="/contact">Contact</Link>
                            </td>
                        </tr>   
                    </tbody>
                </table>
                {/* Routing Table*/}
                <div>
                   <Switch>
                       <Route exact path="/" component={HomeComponent}/>
                       <Route exact path="/about/:id" component={AboutComponent}/>
                       <Route exact path="/contact" component={ContactComponent}/>
                       <Redirect to="/"/>
                   </Switch>
                </div>
            </div>
        );
    }
}
 
export default ApplicationComponent;
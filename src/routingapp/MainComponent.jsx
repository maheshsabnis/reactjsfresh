import React, { Component } from 'react';
import {Route, Link, Switch,Redirect} from 'react-router-dom';
import HomeComponent from './HomeComponent';
import ContactComponent from './ContactComponent';
import AboutComponent from './AboutComponent';
class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            id:1000
        }
    }
    render() { 
        return (
            <div className="container">
                <h1>The React Routing Application</h1>
                <table className="table table-bordered table-striped table-danger">
                  <thead>
                       <tr>
                            <th colSpan="3"></th>
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
                {/* Define Route Table Here */}
                <div>
                    <Switch>
                        <Route exact path="/" component={HomeComponent}></Route>
                        <Route exact path="/about/:id" component={AboutComponent}></Route>
                        <Route exact path="/contact" component={ContactComponent}></Route>
                        <Redirect to="/"/>
                    </Switch>
                </div>
            </div>
        );
    }
}
 
export default MainComponent;
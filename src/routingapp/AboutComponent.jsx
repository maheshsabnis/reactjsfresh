import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Switch, Redirect} from 'react-router-dom'
class AboutComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            message:'This is a About Component'
        }
    }
    navigateToContact(){
        this.props.history.push('/contact');
    }
    render() { 
        return (
            <div className="container">
               <h1>The About Component</h1>
               <div className="container">{this.state.message} {this.props.match.params.id}</div> 
               <hr/>
               <input type="button" value="Navigate to Contact" 
               onClick={this.navigateToContact.bind(this)} className="btn btn-warning"/>
            </div>
        );
    }
}
 
export default AboutComponent;
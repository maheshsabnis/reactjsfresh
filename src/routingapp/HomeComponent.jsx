import React, { Component } from 'react';
class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            message:'This is a Home Component'
        }
    }
    render() { 
        return (
            <div className="container">
               <h1>The Home Component</h1>
               <div className="container">{this.state.message}</div>
            </div>
        );
    }
}
 
export default HomeComponent;
import React, { Component } from 'react';
class ContactComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            message:'This is a Contact Component'
        }
    }
    render() { 
        return (
            <div className="container">
               <h1>The Contact Component</h1>
               <div className="container">{this.state.message}</div>
            </div>
        );
    }
}
 
export default ContactComponent;
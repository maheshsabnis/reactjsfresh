import React, { Component } from 'react';

class AboutComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            message:'This is a About Component'
         };
    }

    navigateToAbout =() =>{
         this.props.history.push('/contact');   
    }

    navigateToHome =() =>{
        this.props.history.push('/');   
   }
    render() { 
        return (
            <div className="container">
               <h1>The About Component</h1>
               <div className="container">{this.state.message} {this.props.match.params.id}</div>
               <hr/>
               <input type="button" value="Go to Contact"
                className="btn btn-danger"
                 onClick={this.navigateToAbout.bind(this)}/>
                 <br/>
                 <input type="button" value="Go to Home"
                 className="btn btn-danger"
                  onClick={this.navigateToHome.bind(this)}/>
            </div>
        );
    }
}
 
export default AboutComponent;
/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';

class SimpleComponent extends Component {
     constructor(props){
         super(props);
         // define state
         this.state = {
             n1:0,
             n2:0,
             res:0
         };
     }
     handlen1Change(evt) {
         // updating the n1 state property based on the 
         // data from inout element
         this.setState({n1: evt.target.value});
     } 
     handlen2Change(evt) {
        // updating the n1 state property based on the 
        // data from inout element
        this.setState({n2: evt.target.value});
    } 

    handleInputTextChange(evt) {
        this.setState({[evt.target.name]:evt.target.value});
    }

    add() {
        let res = parseInt(this.state.n1) +parseInt(this.state.n2);
        this.setState({res:res});
    }
    clear() {
        this.setState({n1:0});
        this.setState({n2:0});
        this.setState({res:0});
    }
     render(){
         return (
             <div className="container">
                <h2>Hello I am a React Component</h2>
                <div className="form-group">
                  <label>N1</label>
                  {/* binding the state */}
                  <input type="text" name="n1" value={this.state.n1} onChange={this.handleInputTextChange.bind(this)} className="form-control"/>
                </div>
                <div className="form-group">
                  <label>N2</label>
                  <input type="text" name="n2" value={this.state.n2} onChange={this.handleInputTextChange.bind(this)} className="form-control"/>
                </div>
                <div className="form-group">
                  <label>Res</label>
                  <input type="text"  value={this.state.res} readOnly className="form-control"/>
                </div>
                <div className="form-group">
                  <input type="button" value="Clear" onClick={this.clear.bind(this)} className="btn btn-warning"/>
                  <input type="button" value="Save" onClick={this.add.bind(this)} className="btn btn-success"/>
                </div>
             </div>
         );
     }
}

export default SimpleComponent;
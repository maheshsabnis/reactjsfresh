import React, { Component } from 'react';

class LifeCycleComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pValue:10
        }
    }
    componentDidMount=()=>{
        console.log('Parent Component Did Mount');
    }
    componentWillMount=()=>{
        console.log('Parent Component Will Mount');
    }
    componentDidUpdate=()=>{
        console.log('Parent Component Did Update ');
    }
    render() {
        return (
            <div className="container">
               <h2>The Parent Component</h2>
               <input type="text" value={this.state.pValue} onChange={(evt)=> this.setState({pValue:evt.target.value})}/>
               <ChildComponent data={this.state.pValue}/>
            </div>
        );
    }
}


class ChildComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x:10
        }
    }
    componentDidMount=()=>{
        console.log('Child Component Did Mount');
    }
    componentWillMount=()=>{
        console.log('Child Component Will Mount');
    }
    componentDidUpdate=()=>{
        console.log('Child Component Did Update ');
    }
    render() { 
        return (
             <div className="container">
               <h2>The Child Component</h2>
               <div>{this.props.data}</div>
             </div>     
        );
    }
}
 

export default LifeCycleComponent;
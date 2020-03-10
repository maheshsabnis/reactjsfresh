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
        if(this.state.pValue % 2 === 0){
            return (
                <div className="container">
                   <h2>The Parent Component</h2>
                   <input type="text" value={this.state.pValue} onChange={(evt)=> this.setState({pValue:evt.target.value})}/>
                   <ChildComponent data={this.state.pValue}/>
                </div>
            );
        } else {
            return (
                <div className="container">
                   <h2>The Parent Component</h2>
                   <input type="text" value={this.state.pValue} onChange={(evt)=> this.setState({pValue:evt.target.value})}/>
                   <ChildComponent1 data={this.state.pValue}/>
                </div>
            );
        }   
        
    }
}


class ChildComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x:10,
            x1: 0,
            y1: 0
        }
    }
    detectMousePosition = (evt) => {
        this.setState({ x1: evt.clientX });
        this.setState({ y1: evt.clientY });
        console.log(`x = ${this.state.x1} y = x = ${this.state.y1}`);
    }
    componentDidMount=()=>{
        console.log('Child Component Did Mount');
        window.addEventListener('mousemove', this.detectMousePosition);
    }
    componentWillMount=()=>{
        console.log('Child Component Will Mount');
    }
    componentDidUpdate=()=>{
        console.log('Child Component Did Update ');
    }
    UNSAFE_componentWillUnmount=()=> {
        console.log('Child 0 Component will Unmount ');
        window.removeEventListener('mousemove', this.detectMousePosition);
    }
    render() { 
        return (
             <div className="container">
               <h2>The Child Component</h2>
               <div>{this.props.data}</div>
               X - {this.state.x1} Y - {this.state.y1}
             </div>     
        );
    }
}
 


class ChildComponent1 extends Component {
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
    componentWillUnmount=()=> {
        console.log('Child 1 Component will Unmount ');

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
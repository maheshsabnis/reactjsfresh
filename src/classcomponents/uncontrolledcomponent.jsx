import React, { Component } from 'react';

class UnControlledComponent extends Component {
    constructor(props) {
        super(props);
    }
    handleClick=(evt)=>{
        let v1 = this.refs.txtv1.value;
        let v2 = this.refs.txtv2.value;
        
        let res = parseInt(v1) + parseInt(v2);
        this.refs.txtres.value = res;
    }
    render() { 
        return (
            <div className="container">
               <div className="form-group">
                  <label>V1</label>
                  <input type="text" ref="txtv1" className="form-control"/>
               </div>
               <div className="form-group">
                  <label>V2</label>
                  <input type="text" ref="txtv2" className="form-control"/>
               </div>
               <div className="form-group">
                  <label>Res</label>
                  <input type="text" ref="txtres" className="form-control"/>
               </div>
               <div className="form-group">
                 <input type="button" value="Click Me" onClick={this.handleClick.bind(this)} className="btn btn-danger"/>
               </div>
            </div>
        );
    }
}

 
export default UnControlledComponent;
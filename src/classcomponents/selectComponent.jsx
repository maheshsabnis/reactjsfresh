import React, { Component } from 'react';
class SelectComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            dataSource:[],
        }
    }
    
    render() { 
       
        return ( 
            <div className="container">
              {<select className="form-control" >
                 {
                     this.props.dataSource.map((d,i) => (
                         <option key={i} value={d}>{d}</option>
                     ))
                 }
                </select> }
            </div>
         );
    }
}
 
export default SelectComponent;
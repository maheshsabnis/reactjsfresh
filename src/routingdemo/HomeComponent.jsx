import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            message:'This is a Home Component',
            emps:[
                {id:101, name:'A'},
                {id:102, name:'B'},
                {id:103, name:'C'}
            ]
         };
    }
    render() { 
        return (
            <div className="container">
               <h1>The Home Component</h1>
               <div className="container">{this.state.message}</div>
               <hr/>
               <div className="container">
                 <Link to="">Create New Employee</Link>
               </div>
               <table className="table table-dark">
                 <thead>
                   <tr>
                     <th>id</th>
                     <td>name</td>
                   </tr>
                 </thead>
                 <tbody>
                   {
                       this.state.emps.map((e,i) => (
                             <tr key={i}>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>
                                  <Link to={`/about/${e.id}`}>Edit</Link>
                                </td>
                             </tr>   
                       ))
                   }
                 </tbody>
               </table>
            </div>
        );
    }
}
 
export default HomeComponent;
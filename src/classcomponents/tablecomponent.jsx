import React, { Component } from 'react';
class TableComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    handleClick=(v)=>{
        this.props.selectedRow(v);
    }
     
    render() { 
        console.log(`In Render ${JSON.stringify(this.props.dataSource)}`);
        let columns =[];
        for(let c in this.props.dataSource[0]){
            columns.push(c);
        } 
        return (
            <div className="container">
                <table className="table table-bordered table-striped">
                   <thead>
                      <tr>
                           {
                               columns.map((c,i)=> (
                                    <th key={i}>{c}</th>
                               ))
                            } 
                      </tr>
                   </thead>
                   <tbody>
                      {
                        this.props.dataSource.map((d,j)=> (
                            <tr key={j} onClick={()=> this.handleClick(d) }>
                               {
                                columns.map((c,i)=> (
                                    <td key={i}>{d[c]}</td>
                               ))
                               } 
                            </tr>
                        ))
                      }
                   </tbody>
                </table>
            </div>
        );
    }
}
 
export default TableComponent;
import React, { Component } from 'react';
class TableComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: this.props.dataSource,  
            columns:[]
        }
    }

    componentDidMount=()=>{
        console.log(this.state.dataSource);
    }
    render() { 
        return (
            <div className="container">
                <table className="table table-bordered table-striped">
                   <thead>
                      <tr>
                        
                      </tr>
                   </thead>
                </table>
            </div>
        );
    }
}
 
export default TableComponent;
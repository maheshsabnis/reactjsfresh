import React, { Component } from 'react';
import DataGridComponent from '../classcomponents/DataGridComponent';

class CompanyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return (
            <div className="container">
               <h1>The Company Listing</h1>
               <DataGridComponent dataSource={this.props.data}></DataGridComponent>
            </div>
        );
    }
}
 
export default CompanyComponent;
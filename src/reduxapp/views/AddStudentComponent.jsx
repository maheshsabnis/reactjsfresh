import React, { Component } from 'react'

class AddStudentComponent extends Component {

    handleClick=()=>{
        // read data from input text elements
        let student = {
            StudentId : this.refs.StudentId.value,
            StudentName : this.refs.StudentName.value 
        };
        this.props.AddClick(student);
        // clear the textboxes
        this.refs.StudentId.value = 0;
        this.refs.StudentName.value = '';
    }
    render() {
        return (
            <div className="container">
                 <div className="form-group">
                   <label>Student Id</label>
                   <input type="text" ref="StudentId" className="form-control"/>
                 </div>
                 <div className="form-group">
                   <label>Student Name</label>
                   <input type="text" ref="StudentName" className="form-control"/>
                 </div>   
                 <div className="form-group">
                   <input type="button" className="btn btn-success" value="Add"
                    onClick={this.handleClick.bind(this)}/>
                 </div>
            </div>
        )
    }
}
export default AddStudentComponent;
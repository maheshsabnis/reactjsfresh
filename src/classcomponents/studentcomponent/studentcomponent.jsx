import React, { Component } from 'react';

import SelectComponent from './../selectComponent';

import Logic from './../../models/logic';

import { Universities, Courses } from './../../models/constants';

class StudentComponent extends Component {
    constructor(props) {
        super(props);
        this.logic = new Logic();
        this.state = {
            StudentId:0,
            StudentName: '',
            University:'',
            Course:'',
            Fees:0,
            universities: Universities,
            courses: Courses,
            students:[]
        };

       

    }
    
    handleInputs=(evt)=> {
        this.setState({[evt.target.name]: evt.target.value});
    }

    handleClear=(evt)=>{
        this.setState({'StudentId':0});
        this.setState({'StudentName':''});
        this.setState({'University':''});
        this.setState({'Course':''});
        this.setState({'Fees':0});
    };
    handleSave=(evt)=>{
        let student = {
            StudentId: this.state.StudentId,
            StudentName: this.state.StudentName,
            University: this.state.University,
            Course: this.state.Course,
            Fees: this.state.Fees
        };
        let studs = this.logic.addStudent(student);
        this.setState({'students': studs});
        console.log(JSON.stringify(this.state.students));
    }
    // the method that has calls to all heavy operations or external async calls
    componentDidMount=()=>{
        let studs = this.logic.getStudents();
        this.setState({'students': studs});
    }
    getSelectedUniversity(val) {
        console.log(`Vaule Received from SelectComponent ${val}`);
        this.setState({University: val})
    }
    getSelectedCourse(val) {
        console.log(`Vaule Received from SelectComponent ${val}`);
        this.setState({Course: val})
    }
    rowClick(r){
        console.log(r);
    }
    render() {
         
        return (
            <div className="container">
               <div className="form-group">
                  <label>Student Id</label>
                  <input type="text" value={this.state.StudentId} name="StudentId" 
                    onChange={this.handleInputs.bind(this)}
                  className="form-control"/>
               </div>
               <div className="form-group">
                  <label>Student Name</label>
                  <input type="text" value={this.state.StudentName} name="StudentName" 
                  onChange={this.handleInputs.bind(this)}
                  className="form-control"/>
               </div>
               <div className="form-group">
                  <label>University</label>
                  <SelectComponent name="University" selectedValue={this.getSelectedUniversity.bind(this)} value={this.state.University} dataSource={this.state.universities}></SelectComponent>
               </div>
               <div className="form-group">
                 <label>Courses</label>
                 <SelectComponent name="Course" selectedValue={this.getSelectedCourse.bind(this)} dataSource={this.state.courses}></SelectComponent>
               </div>
               <div className="form-group">
                  <label>Fees</label>
                  <input type="text" value={this.state.Fees} name="Fees" 
                  onChange={this.handleInputs.bind(this)} className="form-control"/>
               </div>
               <div className="form-group">
                   <input type="button"  value="New" onClick={this.handleClear.bind(this)} className="btn btn-warning"/>
                   <input type="button" value="Save" onClick={this.handleSave.bind(this)} className="btn btn-success"/>
               </div>
               <table className="table table-bordered table-striped">
                  <thead>
                     <tr>
                        <th>Student Id</th>
                        <th>Student Name</th>
                        <th>University</th>
                        <th>Course</th>
                        <th>Fees</th>
                     </tr>
                  </thead>
                  <tbody>
                     {
                         this.state.students.map((s,i) => (
                             <tr key={i} onClick={this.rowClick.bind(s)}>
                                <td>{s.StudentId}</td>
                                <td>{s.StudentName}</td>
                                <td>{s.University}</td>
                                <td>{s.Course}</td>
                                <td>{s.Fees}</td>
                             </tr>
                         ))
                     }
                  </tbody>
               </table>
            </div>
        );
    }
}

export default StudentComponent;
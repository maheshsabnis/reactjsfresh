import React, { Component } from 'react';

import SelectComponent from '../selectComponent';

import DataGricComponent from '../DataGridComponent';


import { Universities, Courses } from '../../models/constants';

import HttpService from './../../services/httpservice';

class StudentServiceComponent extends Component {
    constructor(props) {
        super(props);
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
        // define an instancve of HTTP Service
        this.serv = new HttpService();
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

        this.serv.postStudent(student)
        .then((response)=>{
            alert(`Data Inserted ${response.data.data}`);
             this.loadData();
        }).catch((error)=>{
            console.log(`Error Occured ${error}`);
        });

        // this.setState({'students': studs});
        // console.log(JSON.stringify(this.state.students));
    }
    // the method that has calls to all heavy operations or external async calls
    componentDidMount=()=>{
        this.loadData();
    }
    loadData=()=>{
        this.serv.getStudents()
        .then((response)=>{
            console.log(response.data.data);
            this.setState({'students': response.data.data});
        })
        .catch((error)=>{
            console.log(`Error Occured ${error}`);
        });
    }
    getSelectedUniversity(val) {
        console.log(`Vaule Received from SelectComponent ${val}`);
        this.setState({University: val})
    }
    getSelectedCourse(val) {
        console.log(`Vaule Received from SelectComponent ${val}`);
        this.setState({Course: val})
    }
    rowClick(s){
        console.log(s);
        this.setState({'StudentId':s.StudentId});
        this.setState({'StudentName':s.StudentName});
        this.setState({'University':s.University});
        this.setState({'Course':s.Course});
        this.setState({'Fees':s.Fees});
    }
    render() {
         
        return (
            <div className="container">
              <h2>The Student Service</h2>
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
                  <SelectComponent name="University" data={this.state.University} selectedValue={this.getSelectedUniversity.bind(this)} value={this.state.University} dataSource={this.state.universities}></SelectComponent>
               </div>
               <div className="form-group">
                 <label>Courses</label>
                 <SelectComponent name="Course" data={this.state.Course} selectedValue={this.getSelectedCourse.bind(this)} dataSource={this.state.courses}></SelectComponent>
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
                <hr/>
                <DataGricComponent dataSource={this.state.students}
                selectedRow={this.rowClick.bind(this)}></DataGricComponent>
            </div>
        );
    }
}

export default StudentServiceComponent;
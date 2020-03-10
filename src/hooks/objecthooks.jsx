import React, { useState } from 'react';
import Logic from './../models/logic';
import {Universities, Courses} from './../models/constants';

// import the DataContext
import { DataContext } from './datacontext';
import DisplayComponent from './childHook';

const StudentHookComponent=()=> {
   // defining state for Student, Students

   const [student, updateStudent] = useState({StudentId:0, StudetName:'', University:'', Course:'', Fees:0});
   const [students, addStudent] = useState([]);
   
   const clear =() => {
     updateStudent({StudentId:0, StudetName:'', University:'', Course:'', Fees:0});  
   } 
   const save =() => {
       // adding the student object in students array using spread oparator
     addStudent([...students, {StudentId:student.StudentId, 
        StudetName:student.StudentName, University:student.University, 
        Course:student.Course,
         Fees:student.Fees}]);  
   }
    return (
      <div className="container">
         <div className="form-group">
          <label>Student Id</label>
          {/* update the StudentId base on value entered in TextBox and addit in student object*/}
          <input type="text" className="form-control" value={student.StudentId}
            onChange={(evt)=>updateStudent({ ...student, StudentId: parseInt(evt.target.value) }) }/>
         </div>
         <div className="form-group">
          <label>Student Name</label>
          <input type="text" className="form-control" value={student.StudentName}
          onChange={(evt)=>updateStudent({ ...student, StudentName: evt.target.value }) }/>
         </div>
         <div className="form-group">
          <label>University</label>
          <input type="text" className="form-control" value={student.University}
          onChange={(evt)=>updateStudent({ ...student, University: evt.target.value }) }/>
         </div>
         <div className="form-group">
          <label>Course</label>
          <input type="text" className="form-control" value={student.Course}
          onChange={(evt)=>updateStudent({ ...student, Course: evt.target.value }) }/>
         </div>
         <div className="form-group">
          <label>Fees</label>
          <input type="text" className="form-control" value={student.Fees}
          onChange={(evt)=>updateStudent({ ...student, Fees: parseInt(evt.target.value) }) }/>
         </div>
         <div className="form-group">
           <input type="button" value="New" className="btn btn-warning" onClick={clear}/>
           <input type="button" value="Save" className="btn btn-success" onClick={save}/>
         </div>
         <br/>
         <div>{JSON.stringify(students)}</div>
         <hr/>
         <DataContext.Provider value={{students, getData}}>
            <DisplayComponent/>
         </DataContext.Provider>
      </div>

   );
}

export default StudentHookComponent;

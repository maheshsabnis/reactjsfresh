import React, { Component } from 'react'

 class ListStudentsComponent extends Component {
    render() {
      //  console.log(`In the ListStudentComponent ${JSON.stringify(this.props.students)}`);
        return (
            <div className="container">
                <table className="table table-bordered table-striped table-danger">
                  <thead>
                    <tr>
                      <th>Student Id</th>
                      <th>Student Name</th>
                    </tr>
                  </thead>
                  <tbody>
                     {
                         this.props.studentsData.map((s,i)=> (
                             <tr key={i}>
                               <td>{s.student.StudentId}</td>
                               <td>{s.student.StudentName}</td>
                             </tr>
                         )) 
                     }
                  </tbody>
                </table>
            </div>
        )
    }
}

export default ListStudentsComponent;

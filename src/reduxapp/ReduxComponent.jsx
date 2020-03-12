import React, { Component } from 'react';
import AddStudentComponent from './views/AddStudentComponent';
import ListStudentsComponent from './views/ListStudentsComponent';
// import the action
import {addStudent} from './actions/actions';
import { connect } from 'react-redux';
class ReaduxComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        // define a object that will used to dispatch the add student request from
        // AddStudentComponent and will also list the student data in
        // ListStudentsComponent
        const {dispatch, liststudents} = this.props;
        return (
            <div className="container">
                <h1>The React Redux App</h1>
                {/* dispatch the action and pass student object to it */}
                <AddStudentComponent AddClick={(student)=> dispatch(addStudent(student))}/>
                <hr/>
                {/* Pass the list of students received from the store to ListStudentsComponent */}
                <ListStudentsComponent studentsData={liststudents}/>
            </div>
        );
    }
}
 
// map data received from state to props of the current component
// state will be returned from reducer
function mapStateToProps (state) {
    console.log(`In the ReaduxComponent mapStateToProps ${JSON.stringify(state)}`);
    return {
        liststudents: state.listStudentsReducer
    }
}  

// connect the mapStateToProps() method with the component using 'connect()' method
export default connect(mapStateToProps)(ReaduxComponent);
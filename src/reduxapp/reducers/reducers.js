// import action type from the actions

import { ADD_STUDENT } from "../actions/actions";
import { combineReducers } from "redux";

// write reducer functions
// state: represents an initial state in Store
// action: represents that that will will cause the state to update using the reducer
export function addStudentReducer(state, action) {
    console.log(`addStudentReducer ${JSON.stringify(state)} `);

    switch (action.type) {
        case ADD_STUDENT:
            return {
                student: action.student // add the student in the state and return it
            };
        default:
            return state; // return the origical state
    }
}
// method accepts an empty array as state from store and action
export function listStudentsReducer(state = [], action) {
    console.log(`listStudentReducer ${JSON.stringify(state)} `);
    switch (action.type) {
        case ADD_STUDENT:
            return [...state, addStudentReducer(undefined, action)]

        default:
            return state; // return the origical state
    }
}

// use combibe reducert object to aggrigate all reducer functions
const studentreducer = combineReducers({ listStudentsReducer });

// export the reducer
export default studentreducer;
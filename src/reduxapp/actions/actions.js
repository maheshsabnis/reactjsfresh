// action type

import HttpService from "../../services/httpservice";

// used by the reducer to upate the state in store
export const ADD_STUDENT = "ADD_STUDENT";

// action creator
// accept payload as input parameter and
// return the action with payload
// additionally it contains logic to work with actions
export function addStudent(student) {
    return {
        type: ADD_STUDENT,
        student
    }
}
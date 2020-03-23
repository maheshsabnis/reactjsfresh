// the class file containing
// conde for HTTP Calls
import axios from 'axios';
class HttpService {
    constructor() {
        this.url = 'http://localhost:6070/api/students';
    }
    getStudents() {
        let response = axios.get(this.url);
        return response;
    }

    postStudent(student) {
        let response = axios.post(this.url, student, {
            headers: {
                'Content-type': 'application/json'
            }
        });
        return response;
    }

    putStudent(student) {
        let response = axios.put(`${this.url}/${student.StudentId}`, student, {
            headers: {
                'Content-type': 'application/json'
            }
        });
        return response;
    }

    deleteStudent(id) {
        let response = axios.delete(`${this.url}/${id}`);
        return response;
    }
}

export default HttpService;
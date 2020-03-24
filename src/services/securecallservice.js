import axios from "axios";

class SecureCallService {
    constructor() {
        this.url = 'http://localhost:6070';
    }

    // register users
    register(user) {
        let response = axios.post(`${this.url}/api/users/register`,
            user, {
                headers: {
                    'Content-type': 'application/json'
                }
            });
        return response;
    }

    // login users
    login(user) {
        let response = axios.post(`${this.url}/api/users/authuser`,
            user, {
                headers: {
                    'Content-type': 'application/json'
                }
            });
        return response;
    }

    getStudents(token) {
        let response = axios.get(`${this.url}/api/students`, {
            headers: {
                'AUTHORIZATION': `Bearer ${token}`
            }
        });
        return response;
    }
}

export default SecureCallService;
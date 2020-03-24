import React, { Component } from 'react';
import SecureCallService from '../services/securecallservice';
class SecureCallComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { }
        this.serv= new SecureCallService();
    }

    onRegisterUser=()=>{
        const user = {
            UserName:'tejas@msit.com',
            Password: 'Pass123'
        };
        this.serv.register(user)
        .then((response)=> {
            console.log(JSON.stringify(response.data));
        }).catch((error)=>{
            console.log(`Error in creating user ${error}`);
        });
    };

    onLoginUser=()=>{
        const user = {
            UserName:'tejas@msit.com',
            Password: 'Pass123'
        };
        this.serv.login(user)
        .then((response)=> {
            console.log(JSON.stringify(response));
            // save the received token in session storage
            sessionStorage.setItem('token', response.data.data);
        }).catch((error)=>{
            console.log(`Error in creating user ${error}`);
        });
    }
    onGetStudents=()=>{
            // read token in session storage
        const token = sessionStorage.getItem('token'); 
        this.serv.getStudents(token)
        .then((response)=> {
            console.log(JSON.stringify(response));
            sessionStorage.setItem('token', response.data.data);
        }).catch((error)=>{
            console.log(`Error in creating user ${error}`);
        });
    }
    render() { 
        return (
            <div className="container">
               <div className="form-group">
                 <input type="button" value="register" onClick={this.onRegisterUser} className="btn btn-warning"/>
               </div>
               <div className="form-group">
               <input type="button" value="login" onClick={this.onLoginUser} className="btn btn-success"/>
             </div>
             <div className="form-group">
             <input type="button" value="get students" onClick={this.onGetStudents} className="btn btn-danger"/>
           </div>
            </div>
        );
    }
}
 
export default SecureCallComponent;
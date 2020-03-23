import React from 'react';

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        },()=> console.log(`${this.state.email} ${this.state.password}`));
    }
    
    render() {
        return (
            <form className='login'>
                <label>Username</label>
                <input id='email' onBlur={this.handleInputChange} name='email' type='text' />
                <label>Password</label>
                <input id='password' onBlur={this.handleInputChange} name='password' type='password' />
                <button>Submit</button>
            </form>
        )
    }
}
export default Login
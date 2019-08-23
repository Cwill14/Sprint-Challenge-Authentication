import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axiosWithAuth from '../axiosWithAuth';

const Register = props => {

    const [creds, setCreds] = useState({
        username: '',
        password: ''
    })

    const handleChanges = e => {
        e.preventDefault();
        setCreds({
            ...creds,
            [e.target.name]: e.target.value
        })
    }

    const register = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('http://localhost:3300/api/auth/register', creds)
            .then(res => {
                console.log(res)
                props.history.push('/');
            })
            .catch(err => {
                console.log(err)
            })
        setCreds({
            username: '',
            password: ''
        })
    }

    return (
        <div>
            <form onSubmit={register}>
                <input
                    type="username"
                    placeholder="username"
                    name="username"
                    value={creds.username}
                    onChange={handleChanges}
                    autoComplete="off"
                    required
                />
                <input
                    type="password"
                    placeholder="password"
                    name="password"
                    value={creds.password}
                    onChange={handleChanges}
                    autoComplete="off"
                    required
                />
                <button>Register</button>
            </form>
            <p>Already have an Account? Login <Link to="/">here</Link></p>
        </div>
    )
}
export default Register;
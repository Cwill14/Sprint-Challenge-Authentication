import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axiosWithAuth from '../axiosWithAuth';

const Login = props => {

    const [values, setValues] = useState({
        username: '',
        password: ''
    })

    const handleChanges = e => {
        e.preventDefault();
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const login = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('http://localhost:3300/api/auth/login', values)
            .then(res => {
                console.log(res)
                localStorage.setItem('token', res.data.token)
                props.history.push('/users')
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <form onSubmit={login}>
                <input
                    type="username"
                    placeholder="username"
                    name="username"
                    value={values.username}
                    onChange={handleChanges}
                    autoComplete="off"
                    required
                />
                <input
                    type="password"
                    placeholder="password"
                    name="password"
                    value="password"
                    onChange={handleChanges}
                    autoComplete="off"
                    required
                />
            </form>
            <p>New User? Sign up <Link to="/registe">here</Link></p>
        </div>
    )
}
export default Login;
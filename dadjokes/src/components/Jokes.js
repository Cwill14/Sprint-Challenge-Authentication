import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../axiosWithAuth';

import Joke from './Joke';

const Jokes = props => {
     
    const [jokes, setJokes] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get('http://localhost:3300/api/jokes')
            .then(res => {
                console.log(res);
                setJokes(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    const logout = () => {
        localStorage.removeItem('token');
        props.history.push('/');
    };
    
    return (
        <div>
            {jokes.map(joke => {
                <Joke key={joke.id} joke={joke} />
            })}
        </div>
    )
}

export default Jokes;
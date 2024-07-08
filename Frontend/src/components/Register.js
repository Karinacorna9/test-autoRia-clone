import React, { useState } from 'react';

function Register({ handleRegister }) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        handleRegister(username, email, password);
    };

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
                <br />
                <label>Email:</label>
                <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                <br />
                <label>Password:</label>
                <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                <br />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;
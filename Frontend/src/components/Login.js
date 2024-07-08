import React, { useState } from 'react';

function Login({ handleLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        handleLogin(username, password);
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
                <br />
                <label>Password:</label>
                <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
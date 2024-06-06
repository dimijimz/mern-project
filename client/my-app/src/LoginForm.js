
import React, { useState } from 'react';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Placeholder for login functionality
    };

    return (
        <div>
            <h2>Login</h2>
            <input type='text' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default LoginForm;


const handleLogin = async () => {
    // Placeholder for login API call
    console.log('Logging in with', username, password);
};


const handleLogin = async () => {
    try {
        // Placeholder for API call to authenticate and get token
        const token = 'sample_token';
        localStorage.setItem('token', token);
        console.log('Login successful, token stored');
    } catch (error) {
        console.error('Login failed');
    }
};


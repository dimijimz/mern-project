
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


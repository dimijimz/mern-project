
import React, { useState } from 'react';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
            setError('Both fields are required');
        } else {
            setError('');
            // Proceed with API call (dummy code)
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type='submit'>Login</button>
            {error && <p>{error}</p>}
        </form>
    );
}
export default LoginForm;


// Assuming API call for login
function handleLogin() {
    // Dummy API call (replace with real API)
    if (username === 'admin' && password === 'password') {
        setError('');
    } else {
        setError('Invalid username or password');
    }
}

// Plan to handle user sessions in frontend
// TODO: Add email validation to registration form

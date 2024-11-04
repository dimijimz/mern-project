import React from 'react';

function Profile() {
    const username = "[username]"; // Placeholder for dynamic username

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>User Profile</h1>
            <p>Welcome, {username}!</p>
            <p>This is your profile page. More information will be displayed here.</p>
        </div>
    );
}

export default Profile;


import React, { useEffect, useState } from 'react';

function Profile({ token }) {
    const [username, setUsername] = useState('');

    useEffect(() => {
        // Placeholder for fetching username using token
        setUsername('User'); // Replace with actual user data
    }, [token]);

    return (
        <div>
            <p>This is your profile page.</p>
        </div>
    );
}

export default Profile;


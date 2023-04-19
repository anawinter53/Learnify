import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {

    return <main>
        <h1>404: Page not found</h1>
        <Link to="/">Return Home</Link>
    </main>
};

export default NotFound;
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            
            <div>
                <Link to="/statistics">Statistics</Link>
                <Link to="/appliedjobs">Applied Jobs</Link>
                <Link to="/blog">Blog</Link>
            </div>
            <div>
                <button className='btn-primary'>Start Applying</button>
            </div>
        </div>
    );
};

export default Header;
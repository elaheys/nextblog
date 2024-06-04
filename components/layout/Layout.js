import Link from 'next/link';
import React from 'react';

const Layout = ({children}) => {
    return (
        <>
            <header className='header'>
                <h2>blog</h2>
                <Link href="/addpost">Add Post</Link>
            </header>
            <div className='main'>{children}</div>
            <footer className='footer'>
                Next.js | BLOG Project &copy;
            </footer>
        </>
    );
};

export default Layout;
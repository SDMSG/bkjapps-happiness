import React from 'react';
import Navigation from '../components/navigation';
import ScrapbookLayout from '../components/scrapbook-layout';
import './globals.css';

const Layout = ({ children }) => {
    return (
        <ScrapbookLayout>
            <Navigation />
            <main>{children}</main>
            <footer>
                <p>Happy Birthday Celebration!</p>
            </footer>
        </ScrapbookLayout>
    );
};

export default Layout;
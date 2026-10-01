import React from 'react';

const ScrapbookLayout: React.FC = ({ children }) => {
    return (
        <div className="scrapbook-layout">
            <header className="scrapbook-header">
                <h1>Birthday Scrapbook</h1>
            </header>
            <main className="scrapbook-content">
                {children}
            </main>
            <footer className="scrapbook-footer">
                <p>© 2023 Birthday Celebration</p>
            </footer>
        </div>
    );
};

export default ScrapbookLayout;
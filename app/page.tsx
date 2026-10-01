import React from 'react';
import ScrapbookLayout from '../components/scrapbook-layout';
import Navigation from '../components/navigation';
import AnimationWrapper from '../components/animation-wrapper';

const HomePage = () => {
    return (
        <ScrapbookLayout>
            <Navigation />
            <AnimationWrapper>
                <h1>Welcome to the Birthday Scrapbook!</h1>
                <p>Join us in celebrating a special day filled with love, memories, and music.</p>
                <p>Explore the pages to share your memories, listen to the playlist, and write heartfelt letters.</p>
            </AnimationWrapper>
        </ScrapbookLayout>
    );
};

export default HomePage;
import React from 'react';
import ScrapbookLayout from '../../components/scrapbook-layout';
import AnimationWrapper from '../../components/animation-wrapper';

const ScrapbookLayoutWithChildren = ScrapbookLayout as React.ComponentType<{
    children?: React.ReactNode;
}>;
const AnimationWrapperWithChildren = AnimationWrapper as React.ComponentType<{
    children?: React.ReactNode;
}>;

const LetterPage = () => {
    return (
        <ScrapbookLayoutWithChildren>
            <AnimationWrapperWithChildren>
                <div className="letter-container">
                    <h1>Heartfelt Letters</h1>
                    <p>Write your message for the birthday celebration below:</p>
                    <textarea placeholder="Your message..." rows={10} className="message-input" />
                    <button className="submit-button">Submit</button>
                </div>
            </AnimationWrapperWithChildren>
        </ScrapbookLayoutWithChildren>
    );
};

export default LetterPage;
import React from 'react';
import ScrapbookLayout from '../../components/scrapbook-layout';
import AnimationWrapper from '../../components/animation-wrapper';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            [elementName: string]: any;
        }
    }
}

const LetterPage = () => {
    return (
        <ScrapbookLayout>
            <AnimationWrapper>
                <div className="letter-container">
                    <h1>Heartfelt Letters</h1>
                    <p>Write your message for the birthday celebration below:</p>
                    <textarea placeholder="Your message..." rows={10} className="message-input" />
                    <button className="submit-button">Submit</button>
                </div>
            </AnimationWrapper>
        </ScrapbookLayout>
    );
};

export default LetterPage;
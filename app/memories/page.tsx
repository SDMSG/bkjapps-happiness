import React from 'react';
import ScrapbookLayout from '../../components/scrapbook-layout';
import AnimationWrapper from '../../components/animation-wrapper';

const MemoriesPage = () => {
    return (
        <ScrapbookLayout>
            <AnimationWrapper>
                <h1>Memories</h1>
                <p>Welcome to the Memories page! Here, we celebrate the beautiful moments shared during the birthday celebration.</p>
                <div className="memories-gallery">
                    {/* Add c:\Users\sdmsg\.vscode\Snapchat-1310679033.jpgc:\Users\sdmsg\.vscode\Snapchat-1253327741.jpgimagesc:\Users\sdmsg\.vscode\Snapchat-506091960.jpg and messages related to the birthday celebration here */}
                </div>
            </AnimationWrapper>
        </ScrapbookLayout>
    );
};

export default MemoriesPage;
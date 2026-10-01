import React from 'react';
import MusicBooth from '../../components/music-booth';
import AnimationWrapper from '../../components/animation-wrapper';

const PlaylistPage = () => {
    return (
        <AnimationWrapper>
            <div className="playlist-container">
                <h1>Birthday Celebration Playlist</h1>
                <p>Enjoy this curated list of songs to celebrate the special day!</p>
                <MusicBooth />
            </div>
        </AnimationWrapper>
    );
};

export default PlaylistPage;
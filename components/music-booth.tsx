import React, { useEffect, useState } from 'react';
import { getSpotifyTracks } from '../lib/spotify';

const MusicBooth = () => {
    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        const fetchTracks = async () => {
            const fetchedTracks = await getSpotifyTracks();
            setTracks(fetchedTracks);
        };

        fetchTracks();
    }, []);

    return (
        <div className="music-booth">
            <h2>Birthday Playlist</h2>
            <ul>
                {tracks.map((track) => (
                    <li key={track.id}>
                        <a href={track.url} target="_blank" rel="noopener noreferrer">
                            {track.name} by {track.artist}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MusicBooth;
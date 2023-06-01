import React, { useState, useEffect } from 'react';
import TrackIndexList from '../../Components/Track/TrackIndexList';

import '../../index.css';

const fetchURL = 'http://localhost:8080/api/songs/';

function TrackIndexPage() {
    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        fetchTracks();
    }, []);

    const fetchTracks = async () => {
        try {
            const response = await fetch(fetchURL);
            const data = await response.json();
            setTracks(data);
            console.log(data);
        } catch (error) {
            console.log('Error fetching songs:', error);
        }
    };

    return (
        <div>
            <TrackIndexList tracks={tracks} />
        </div>
    );
}

export default TrackIndexPage;
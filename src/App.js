import React, { useState, useRef, useEffect } from 'react';
import Banner from "./Banner";
import TrackList from "./TrackList";

import './index.css';


const fetchURL = 'http://localhost:8080/api/songs/'
function App() {

    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        fetchTracks();
    }, []);

    const fetchTracks = async () => {
        try {
            const response = await fetch(fetchURL);
            const data = await response.json();
            setTracks(data);
        } catch (error) {
            console.log('Error fetching songs:', error);
        }
    };

    return (
        <div>
            <Banner />
            <TrackList tracks={tracks} />
        </div>
    );
}



export default App;

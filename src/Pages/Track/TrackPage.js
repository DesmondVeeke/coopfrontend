import React, {useEffect, useState} from 'react';
import TrackItem from "../../Components/Track/TrackItem"
import {Link, useParams} from "react-router-dom";
import PluginList from "../../Components/Plugin/PluginList";

function TrackPage() {
    const { trackId } = useParams();
    const [track, setTrack] = useState(null);
    const [plugins, setPlugins] = useState([]);
    const fetchURL = 'http://localhost:8080/api/songs/';

    useEffect(() => {
        fetchTrack();
        fetchPlugins();
    }, [trackId]);

    const fetchTrack = async () => {
        try {
            const response = await fetch(`${fetchURL}${trackId}`);
            const data = await response.json();
            setTrack(data);
            console.log(data);
        } catch (error) {
            console.log('Error fetching track:', error);
        }
    };

    const fetchPlugins = async () => {
        try {
            const response = await fetch(`http://localhost:8080/api/plugins/forsong/${trackId}`);
            const data = await response.json();
            setPlugins(data);
        } catch (error) {
            console.log('Error fetching plugins:', error);
        }
    };

    const handleButtonClick = () => {

    }

    return (
        <div className="page-container">
            <div className="page-content">
                <div className="track-item">
                    <h1>Track Details</h1>
                    {track ? <TrackItem track={track} /> : <p>Loading track...</p>}

                </div>
                </div>
            <div className="plugin-container">
                <PluginList plugins={plugins} />
            </div>
            <p></p>
            <Link to={`/`}>
                <button onClick={handleButtonClick}>Back to index</button>
            </Link>
        </div>
    );
}

export { TrackPage };
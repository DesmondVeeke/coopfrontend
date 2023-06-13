import React from 'react';
import { Link } from 'react-router-dom';
import StatusColor from './StatusColor';

function TrackIndexItem({ track }) {
    const { id, trackName, status, author } = track;

    const handleButtonClick = () => {
        console.log('Button clicked. Track ID:', id);
    };

    return (
        <li>
            <h2>{trackName}</h2>
            <p><StatusColor status={status} /></p>
            <p><strong>Author:</strong> {author}</p>
            <Link to={`/tracks/${id}`}>
                <button onClick={handleButtonClick}>View Track</button>
            </Link>
        </li>
    );
}

export default TrackIndexItem;

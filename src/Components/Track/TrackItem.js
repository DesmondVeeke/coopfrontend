import React from 'react';
import StatusColor from './StatusColor';

function TrackItem({ track }) {

    return (
        <li>
            <h2>{track.trackName}</h2>
            <p><StatusColor status={track.status} /></p>
            <p><strong>Author:</strong> {track.author}</p>
            <p><strong>Length:</strong> {track.length} seconds</p>
            <p><strong>Date Added:</strong> {track.dateAdded}</p>
            <p><strong>Date Modified:</strong> {track.dateModified}</p>
            <p><strong>Last Modified By:</strong> {track.lastModifiedBy}</p>
        </li>
    );
}

export default TrackItem;
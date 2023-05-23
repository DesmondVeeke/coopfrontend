import React from 'react';
import TrackItem from "./TrackItem";

function TrackList({ tracks }) {
    return (
        <ul className="track-list">
            {tracks.map((track) => (
                <TrackItem key={track.id} track={track} />
            ))}
        </ul>
    );
}

export default TrackList;
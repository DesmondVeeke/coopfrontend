import React from 'react';
import TrackIndexItem from "./TrackIndexItem";

function TrackIndexList({ tracks }) {
    return (
        <ul className="track-list">
            {tracks.map((track) => (
                <TrackIndexItem key={track.id} track={track} />
            ))}
        </ul>
    );
}

export default TrackIndexList;
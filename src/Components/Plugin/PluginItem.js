import React from 'react';

function PluginItem({ plugin }) {
    return (
        <div>
            <h2>{plugin.name}</h2>
            <p>Version: {plugin.version}</p>
            <p>Available: {plugin.available ? 'Yes' : 'No'}</p>
            {/* Ignore the 'song' property */}
        </div>
    );
}

export default PluginItem;

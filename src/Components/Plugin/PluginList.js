import React from 'react';
import PluginItem from './PluginItem';
import '../../index.css';

function PluginList({ plugins }) {
    return (
        <div>
            <h2>Plugins</h2>
            {plugins.length > 0 ? (
                plugins.map((plugin) => (
                    <PluginItem key={plugin.id} plugin={plugin} />
                ))
            ) : (
                <p>No plugins were used for this track.</p>
            )}
        </div>
    );
}

export default PluginList;

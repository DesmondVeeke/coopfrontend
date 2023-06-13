import React from 'react';
import EnvironmentIndexItem from "./EnvironmentIndexItem";

function EnvironmentIndexList({ environments }) {
    return (
        <ul className="environment-list">
            {environments.map((environment) => (
                <EnvironmentIndexItem key={environment.id} environment={environment} />
            ))}
        </ul>
    );
}

export default EnvironmentIndexList;

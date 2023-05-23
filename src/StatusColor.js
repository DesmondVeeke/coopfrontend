import React from 'react';

function StatusColor({ status }) {
    const getStatusColor = (status) => {
        switch (status) {
            case 'Mix':
                return '#ede96b';
            case 'Mastering':
                return '#88b079';
            case 'Production':
                return '#f27c8b';
            default:
                return '#eaeaea';
        }
    };

    const statusColor = getStatusColor(status);

    return (
        <span
            style={{
                display: 'inline-block',
                padding: '5px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                backgroundColor: statusColor,
                fontWeight: 'bold',
            }}
        >
      {status}
    </span>
    );
}

export default StatusColor;
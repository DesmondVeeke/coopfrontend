import React, { useEffect, useState } from 'react';
import EnvironmentIndexList from '../../Components/Environment/EnvironmentIndexList';
import jwtDecode from 'jwt-decode';

import '../../index.css'

const fetchBaseURL = 'http://localhost:9090/api/environments/participant/';

function EnvironmentIndexPage() {
    const [environments, setEnvironments] = useState([]);
    const token = localStorage.getItem('token');
    const decodedToken = jwtDecode(token);
    const userID = decodedToken.sub;

    useEffect(() => {
        const fetchEnvironments = async () => {
            try {
                const fetchURL = `${fetchBaseURL}${userID}`;

                const response = await fetch(fetchURL, {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        'Authorization': `${token}`,
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    }
                });

                if (response.ok) {
                    const data = await response.json();
                    setEnvironments(data);
                } else {
                    console.log('Error fetching environments:', response.statusText);
                }
            } catch (error) {
                console.log('Error fetching environments:', error);
            }
        };

        fetchEnvironments();
    }, [token, userID]);

    return (
        <div>
            <EnvironmentIndexList environments={environments} />
        </div>
    );
}

export default EnvironmentIndexPage;

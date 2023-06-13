import React, { useState, useEffect } from 'react';
import TrackIndexList from '../../Components/Track/TrackIndexList';
import jwtDecode from 'jwt-decode';

const fetchBaseURL = 'http://localhost:8080/api/songs';
const fetchEnvURL = 'http://localhost:9090/api/environments/participant/';

function TrackIndexPage() {
    const [tracks, setTracks] = useState([]);
    const [environment, setEnvironment] = useState(null);
    const token = localStorage.getItem('token');
    const decodedToken = jwtDecode(token);
    const userID = decodedToken.sub;

    useEffect(() => {
        fetchEnvironment();
    }, []);

    useEffect(() => {
        const socket = new WebSocket('ws://localhost:8080/ws');

        socket.onopen = () => {
            socket.send(JSON.stringify({ type: 'subscribe', destination: '/topic/message' }));
        };

        socket.onmessage = (event) => {
            const message = JSON.parse(event.data);
            console.log(message);
            if (message.text === "New song was added.") {
                fetchTracks(environment); // Fetch tracks again
            }
        };

        return () => {
            socket.close();
        };
    }, [environment]); // Re-run the effect when the environment changes

    const fetchEnvironment = async () => {
        try {
            const response = await fetch(`${fetchEnvURL}${userID}`, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    Authorization: 'Bearer ' + token,
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                },
            });

            if (response.ok) {
                const data = await response.json();
                if (data.length > 0) {
                    const environmentId = data[0].id; // Assuming the first environment ID is used
                    setEnvironment(environmentId);
                    fetchTracks(environmentId);
                }
            } else {
                console.log('Error fetching environments:', response.statusText);
            }
        } catch (error) {
            console.log('Error fetching environments:', error);
        }
    };

    const fetchTracks = async (environmentId) => {
        try {
            const response = await fetch(`${fetchBaseURL}/environment/${environmentId}`, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    Authorization: 'Bearer ' + token,
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                },
            });

            if (response.ok) {
                const data = await response.json();
                setTracks(data);
            } else {
                console.log('Error fetching tracks:', response.statusText);
            }
        } catch (error) {
            console.log('Error fetching tracks:', error);
        }
    };

    return (
        <div>
            <TrackIndexList tracks={tracks} />
        </div>
    );
}

export default TrackIndexPage;

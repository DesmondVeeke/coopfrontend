import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TrackIndexPage from './Pages/Track/TrackIndexPage';
import Banner from './Components/Banner';
import { TrackPage } from './Pages/Track/TrackPage';
import LoginPage from './Pages/User/LoginPage';
import EnvironmentIndexPage from './Pages/Environment/EnvironmentIndexPage';
import HomePage from './Pages/HomePage';

function App() {
    return (
        <Router>
            <div>
                <Banner />
                <Routes>
                    <Route path="/track-index/:environmentId" element={<TrackIndexPage />} />
                    <Route path="/" element={<HomePage />} />
                    <Route path="/tracks/:trackId" element={<TrackPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/environments" element={<EnvironmentIndexPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TrackIndexPage from './Pages/Track/TrackIndexPage';
import Banner from './Components/Banner';
import {TrackPage} from "./Pages/Track/TrackPage";

function App() {
    return (
        <Router>
            <div>
                <Banner />
                <Routes>

                    <Route path="/" element={<TrackIndexPage />} />
                    <Route path="/track/:trackId" element={<TrackPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

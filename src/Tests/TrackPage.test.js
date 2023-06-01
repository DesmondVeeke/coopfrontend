import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { TrackPage } from '../Pages/Track/TrackPage';
import '@testing-library/jest-dom/extend-expect';


test('renders track details', () => {
    render(
        <MemoryRouter>
            <TrackPage />
        </MemoryRouter>
    );
    const trackDetailsElement = screen.getByText(/Track Details/i);
    expect(trackDetailsElement).toBeInTheDocument();
});

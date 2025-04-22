import {render, screen} from '@testing-library/react';
import App from './App';

describe('App component', () => {
    it('h1 is redered', () => {
        render(<App />);
        const h1 = screen.getByText('School Dashboard');
        expect(h1).toBeInTheDocument();
    })

    it('text content in p is correct', () => {
        render(<App />);
        const p1 = screen.getByText('Login to access the full dashboard');
        const footer = screen.getByText(/Copyright 2025 - Holberton School/i);
        expect(p1).toBeInTheDocument();
        expect(footer).toBeInTheDocument();
    })

    it('img is rendered', () => {
        render(<App />);
        const img = screen.getByAltText('holberton logo');
        expect(img).toBeInTheDocument();
    })
})
import {screen, render} from '@testing-library/react';
import Footer from './Footer';

describe('Footer component', () => {
    it('renders the component', () => {
        render(<Footer />);
        const footer = screen.getByText(/Copyright 2025 - Holberton School/i);
        expect(footer).toBeInTheDocument();
    });
})
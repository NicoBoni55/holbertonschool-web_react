import {screen, render} from '@testing-library/react';
import Header from './Header';

describe('Header component', () => {
    it('renders the component', () => {
        render(<Header />);
        const img = screen.getByAltText(/holberton logo/i);
        const h1 = screen.getByText(/School Dashboard/i);
        expect(h1).toBeInTheDocument();
        expect(img).toBeInTheDocument();
    });
})
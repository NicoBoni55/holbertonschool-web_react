import {screen, render} from '@testing-library/react';
import Header from './Header';

describe('Header component', () => {
    it('renders the component', () => {
        render(<Header />);
        const h1 = screen.getByText('School Dashboard');
        const img = screen.getByAltText('holberton logo');
        expect(h1).toBeInTheDocument();
        expect(img).toBeInTheDocument();
    });
})
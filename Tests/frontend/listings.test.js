import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Listings } from '../../components/Listings';

describe('Listings component', () => {
    it('renders correctly', () => {
        const { getByText } = render(<Listings />);
        expect(getByText('Listings')).toBeInTheDocument();
    });

    it('fetches data on mount', async () => {
        const { getByText } = render(<Listings />);
        await waitFor(() => getByText('Listing 1'));
        expect(getByText('Listing 1')).toBeInTheDocument();
    });

    it('handles click on listing', () => {
        const { getByText } = render(<Listings />);
        const listing = getByText('Listing 1');
        fireEvent.click(listing);
        expect(listing).toHaveClass('active');
    });
});
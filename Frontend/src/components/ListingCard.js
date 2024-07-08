import React from 'react';

const ListingCard = ({ listing }) => {
    return (
        <div className="listing-card">
            <h2>{listing.make} {listing.model}</h2>
            <p>Year: {listing.year}</p>
            <p>Price: ${listing.price}</p>
        </div>
    );
};

export default ListingCard;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Listings() {
    const [listings, setListings] = useState([]);

    useEffect(() => {
        axios.get('/listings')
            .then(response => {
                setListings(response.data.listings);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <div>
            <h1>Listings</h1>
            <ul>
                {listings.map(listing => (
                    <li key={listing.id}>
                        <h2>{listing.title}</h2>
                        <p>{listing.description}</p>
                        <p>Price: {listing.price} {listing.currency}</p>
                        <p>Make: {listing.make}</p>
                        <p>Model: {listing.model}</p>
                        <p>Year: {listing.year}</p>
                        <p>Mileage: {listing.mileage}</p>
                        <p>Condition: {listing.condition}</p>
                        <p>Location: {listing.location}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Listings;
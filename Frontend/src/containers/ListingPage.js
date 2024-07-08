import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ListingCard from '../components/ListingCard';
import { fetchListings } from '../actions/listingActions';

const ListingPage = ({ listings, loading, error, fetchListings }) => {
    useEffect(() => {
        fetchListings();
    }, [fetchListings]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="listing-page">
            <h1>Car Listings</h1>
            {listings.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
            ))}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        listings: state.listing.listings,
        loading: state.listing.loading,
        error: state.listing.error,
    };
};

export default connect(mapStateToProps, { fetchListings })(ListingPage);
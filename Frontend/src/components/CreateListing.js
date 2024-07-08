import React, { useState } from 'react';

function CreateListing({ handleCreateListing }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [currency, setCurrency] = useState('');
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');
    const [mileage, setMileage] = useState('');
    const [condition, setCondition] = useState('');
    const [location, setLocation] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const listingData = {
            title,
            description,
            price,
            currency,
            make,
            model,
            year,
            mileage,
            condition,
            location,
        };
        handleCreateListing(listingData);
    };

    return (
        <div>
            <h1>Create Listing</h1>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
                <br />
                <label>Description:</label>
                <textarea value={description} onChange={(event) => setDescription(event.target.value)} />
                <br />
                <label>Price:</label>
                <input type="number" value={price} onChange={(event) => setPrice(event.target.value)} />
                <br />
                <label>Currency:</label>
                <input type="text" value={currency} onChange={(event) => setCurrency(event.target.value)} />
                <br />
                <label>Make:</label>
                <input type="text" value={make} onChange={(event) => setMake(event.target.value)} />
                <br />
                <label>Model:</label>
                <input type="text" value={model} onChange={(event) => setModel(event.target.value)} />
                <br />
                <label>Year:</label>
                <input type="number" value={year} onChange={(event) => setYear(event.target.value)} />
                <br />
                <label>Mileage:</label>
                <input type="number" value={mileage} onChange={(event) => setMileage(event.target.value)} />
                <br />
                <label>Condition:</label>
                <input type="text" value={condition} onChange={(event) => setCondition(event.target.value)} />
                <br />
                <label>Location:</label>
                <input type="text" value={location} onChange={(event) => setLocation(event.target.value)} />
                <br />
                <button type="submit">Create Listing</button>
            </form>
        </div>
    );
}

export default CreateListing;
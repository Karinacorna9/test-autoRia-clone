import React from 'react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Listings from './Listings';
import CreateListing from './CreateListing';
import Navbar from './Navbar';

function App() {
    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
        }
    }, []);

    const handleLogin = async (username, password) => {
        try {
            const response = await axios.post('/auth', { username, password });
            const token = response.data.token;
            setToken(token);
            localStorage.setItem('token', token);
        } catch (error) {
            console.error(error);
        }
    };

    const handleRegister = async (username, email, password) => {
        try {
            const response = await axios.post('/accounts', { username, email, password });
            const user = response.data.user;
            setUser(user);
        } catch (error) {
            console.error(error);
        }
    };

    const handleCreateListing = async (listingData) => {
        try {
            const response = await axios.post('/listings', listingData);
            const listing = response.data.listing;
            console.log(listing);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <BrowserRouter>
            <Navbar token={token} />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" render={() => <Login handleLogin={handleLogin} />} />
                <Route path="/register" render={() => <Register handleRegister={handleRegister} />} />
                <Route path="/listings" component={Listings} />
                <Route path="/create-listing" render={() => <CreateListing handleCreateListing={handleCreateListing} />} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
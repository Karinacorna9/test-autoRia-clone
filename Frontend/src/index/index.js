const loginForm = document.getElementById('login-form');
const accountForm = document.getElementById('account-form');
const listingForm = document.getElementById('listing-form');

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const response = await fetch('/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
    });
    const result = await response.json();
    if (result.error) {
        alert(result.error);
    } else {
        // Login successful, redirect to dashboard
        window.location.href = '/dashboard';
    }
});

accountForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document
    accountForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const response = await fetch('/accounts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email, password }),
        });
        const result = await response.json();
        if (result.error) {
            alert(result.error);
        } else {
            // Account created successfully, redirect to login
            window.location.href = '/login';
        }
    });

    listingForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const price = document.getElementById('price').value;
        const currency = document.getElementById('currency').value;
        const make = document.getElementById('make').value;
        const model = document.getElementById('model').value;
        const year = document.getElementById('year').value;
        const mileage = document.getElementById('mileage').value;
        const condition = document.getElementById('condition').value;
        const location = document.getElementById('location').value;
        const response = await fetch('/listings', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, description, price, currency, make, model, year, mileage, condition, location }),
        });
        const result = await response.json();
        if (result.error) {
            alert(result.error);
        } else {
            // Listing created successfully, redirect to listing page
            window.location.href = `/listings/${result.listingId}`;
        }
    });
});

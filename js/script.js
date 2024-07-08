function register() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
        .then(response => response.json())
        .then(data => {
            const messageDiv = document.getElementById('message');
            messageDiv.textContent = data.message;
        })
        .catch(error => console.error('Error:', error));
}

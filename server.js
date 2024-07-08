const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'project_folder')));
app.use(bodyParser.json());

app.post('/register', (req, res) => {
    const { username, password } = req.body;
    res.json({ message: 'User created successfully' });
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    res.json({ message: 'User logged in successfully' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

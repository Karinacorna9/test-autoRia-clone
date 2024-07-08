// controllers/UserController.js
const axios = require('axios');
const fs = require('fs');

class UserController {
    async getCars(req, res) {
        try {
            // Fetch car data from Auto Ria API (replace with your API endpoint)
            const response = await axios.get('https://api.autoria.com/cars');

            // Store the data in a JSON file (you can modify this to store in a database)
            const carData = response.data;
            fs.writeFileSync('data.json', JSON.stringify(carData));

            // Render the HTML template with the car data
            res.render('index', { carData });
        } catch (error) {
            console.error(error);
            res.status(500).send('Error loading data');
        }
    }
}

module.exports = UserController;
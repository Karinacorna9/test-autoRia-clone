const { development, production } = require('./env');
const database = require('./database');
const auth = require('./auth');
const api = require('./api');

module.exports = {
    development: {
        ...development,
        database,
        auth,
        api,
    },
    production: {
        ...production,
        database,
        auth,
        api,
    },
};
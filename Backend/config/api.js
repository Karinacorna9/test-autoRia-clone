module.exports = {
    port: process.env.PORT || 3001,
    host: process.env.HOST || 'localhost',
    cors: {
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        headers: ['Content-Type', 'Authorization'],
    },
    swagger: {
        enabled: true,
        route: '/api-docs',
        info: {
            title: 'Listings API',
            description: 'API for managing listings',
            version: '1.0.0',
        },
    },
};
module.exports = {
    development: {
        MONGODB_URI: 'mongodb://localhost:27017/listings',
        JWT_SECRET: 'IxjKSym3yV2OPKSn2o+ffSa70HYlA5gETrg4ZR/YFqM=',
        PORT: 3001,
    },
    production: {
        MONGODB_URI: process.env.MONGODB_URI,
        JWT_SECRET: process.env.JWT_SECRET,
        PORT: process.env.PORT,
    },
};
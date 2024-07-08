module.exports = {
    jwt: {
        secret: process.env.JWT_SECRET || 'IxjKSym3yV2OPKSn2o+ffSa70HYlA5gETrg4ZR/YFqM=',
        expiresIn: '1h',
    },
    bcrypt: {
        saltRounds: 10,
    },
};
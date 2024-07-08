module.exports = {
    mongoose: {
        url: process.env.MONGODB_URI || 'mongodb://localhost:27017/listings',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        },
    },
};
const AWS = require('aws-sdk');

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
});

const bucketName = process.env.AWS_BUCKET_NAME;

module.exports = {
    s3,
    bucketName,
    uploadFile: (file) => {
        const params = {
            Bucket: bucketName,
            Key: file.originalname,
            Body: file.buffer,
        };

        return s3.upload(params).promise();
    },
    getFile: (fileName) => {
        const params = {
            Bucket: bucketName,
            Key: fileName,
        };

        return s3.getObject(params).promise();
    },
    deleteFile: (fileName) => {
        const params = {
            Bucket: bucketName,
            Key: fileName,
        };

        return s3.deleteObject(params).promise();
    },
};
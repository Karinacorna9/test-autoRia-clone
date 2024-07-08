const multer = require('multer');
const awsS3 = require('./aws-s3');

const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 1024 * 1024 * 5, // 5MB
    },
});

const uploadFileToS3 = async (file) => {
    try {
        const result = await awsS3.uploadFile(file);
        return result.Location;
    } catch (error) {
        console.error(error);
        return null;
    }
};

module.exports = {
    upload,
    uploadFileToS3,
};
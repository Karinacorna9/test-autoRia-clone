const { upload, uploadFileToS3 } = require('../storage/uploads');
const File = require('../models/File');

const uploadFile = async (req, res) => {
    try {
        const file = req.file;
        const url = await uploadFileToS3(file);
        const fileDoc = new File({ name: file.originalname, url });
        await fileDoc.save();
        res.status(201).json({ message: 'File uploaded successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error uploading file' });
    }
};

const getFile = async (req, res) => {
    try {
        const fileName = req.params.fileName;
        const file = await File.findOne({ name: fileName });
        if (!file) {
            res.status(404).json({ message: 'File not found' });
        } else {
            res.status(200).json({ url: file.url });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error getting file' });
    }
};

module.exports = {
    uploadFile,
    getFile,
};
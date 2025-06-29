const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

// Add error logging for Cloudinary configuration
console.log('Cloudinary Config:', {
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET ? '***' : 'missing'
});

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'wonderway',
        allowedFormats: ['jpeg', 'png', 'jpg']
    }
});

// Add error handler for storage without recursive calls
const originalHandleFile = storage._handleFile;
storage._handleFile = function(req, file, cb) {
    console.log('Attempting to upload file:', file.originalname);
    
    // Call the original _handleFile method
    originalHandleFile.call(this, req, file, (err, info) => {
        if (err) {
            console.error('Cloudinary upload error:', err);
        } else {
            console.log('Upload successful:', info);
        }
        cb(err, info);
    });
};

module.exports = {
    cloudinary,
    storage
};
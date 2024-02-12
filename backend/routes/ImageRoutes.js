const express = require('express');
const multer = require('multer');
const path=require('path')
const ImageController = require('../Controllers/ImageControllers');

const router = express.Router();

// Set up multer storage
const storage = multer.diskStorage({
  destination:  (req, file, cb)=>{
    cb(null, 'Public/Images');
  },
  filename:  (req, file, cb)=>{
    // Set the file name for the uploaded file
    cb(null, file.fieldname + "_"+ Date.now() + path.extname(file.originalname));
  }
});

// Initialize multer with the configured storage
const upload = multer({ storage: storage });

// Route for uploading an image
router.post('/uploads', upload.single('image'), ImageController.uploadImage);



module.exports = router;

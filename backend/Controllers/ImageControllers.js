
const Image = require('../models/ImageSchema');

const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No file uploaded' });
    }
    console.log(req.file);
    const { filename, path } = req?.file;

    const newImage = new Image({
      filename,
      path,
    });

    await newImage.save();

    res.status(201).json({ success: true, message: 'Image uploaded successfully' });
  } catch (error) {
    console.error('Error uploading image:', error);
    res.status(500).json({ success: false, message: 'Failed to upload image' });
  }
};

module.exports= {uploadImage}

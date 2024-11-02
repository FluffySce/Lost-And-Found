const express = require('express');
const router = express.Router();
const multer = require('multer');
const { createItem, getItems, searchItems } = require('../controllers/itemController');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

router.post('/', upload.single('image'), createItem); // Add a new item with image upload
router.get('/', getItems); // Get all items
router.get('/search', searchItems); // Filtered items by type

module.exports = router;

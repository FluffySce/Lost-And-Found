const Item = require('../models/Item.js');

// Add new item (Lost/Found)
exports.createItem = async (req, res) => {
  try {
    const newItem = new Item({
      ...req.body,
      image: req.file ? req.file.path : null,
    });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    console.error("Error creating item:", error);
    res.status(500).json({ error: "Failed to add item", details: error.message });
  }
};

// Get all items
exports.getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (error) {
    console.error("Error retrieving items:", error);
    res.status(500).json({ error: "Failed to retrieve items", details: error.message });
  }
};

// Search for items by type
exports.searchItems = async (req, res) => {
  try {
    const { type } = req.query;
    const items = await Item.find(type ? { type } : {});
    res.status(200).json(items);
  } catch (error) {
    console.error("Error searching items:", error);
    res.status(500).json({ error: "Search failed", details: error.message });
  }
};

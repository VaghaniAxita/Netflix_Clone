const List = require("../models/List");

exports.createList = async (req, res) => {
  try {
    const newList = new List(req.body);
    const savedList = await newList.save();
    res.status(201).json(savedList);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllLists = async (req, res) => {
  try {
    const lists = await List.find();
    res.status(200).json(lists);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getList = async (req, res) => {
  try {
    const list = await List.findById(req.params.id);
    res.status(200).json(list);
  } catch (error) {
    res.status(404).json({ message: "List not found" });
  }
};

exports.updateList = async (req, res) => {
  try {
    const updatedList = await List.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedList);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteList = async (req, res) => {
  try {
    await List.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "List deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

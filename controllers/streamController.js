const Stream = require("../models/Stream");
const { findByIdAndUpdate } = require("../models/User");

exports.getAllStreams = async (req, res) => {
  console.log("coningi");
  const streams = await Stream.find().sort({ createdAt: -1 });
  res.json(streams);
};

exports.createStream = async (req, res) => {
  try {
    console.log(req.body, "fadffasdfasdfsadf");
    const stream = new Stream(req.body);
    await stream.save();
    res.status(201).json(stream);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteStream = async (req, res) => {
  try {
    console.log(req.body, "dlelte");
    const { id } = req.params;
    const deletedStream = await Stream.findByIdAndDelete(id);
    if (!deletedStream) {
      return res.status(404).json({ error: "Stream not found" });
    }
    res.json({ message: "Stream deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateStream = async (req, res) => {
  try {
    console.log("update stream");
    const updatedStream = await Stream.findByIdAndUpdate(
      req.body._id,
      req.body
    );
    if (!updatedStream) {
      return res.status(404).json({ error: "Stream not found" });
    }
    res.json({ message: "Stream updated successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

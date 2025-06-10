const mongoose = require("mongoose");

const streamSchema = new mongoose.Schema({
  teamAName: { type: String, required: true },
  teamALogo: { type: String, required: true }, // URL to logo

  teamBName: { type: String, required: true },
  teamBLogo: { type: String, required: true }, // URL to logo

  leagueName: { type: String, required: true },

  startTime: { type: String, required: true }, // e.g., "08:00 PM"
  startDate: { type: String, required: true }, // e.g., "05/06/2025"
  timeUntilStart: { type: String, required: true },
  streamUrl: { type: String, required: true },
  thumbnail: { type: String }, // optional

  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Stream", streamSchema);

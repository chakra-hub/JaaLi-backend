const express = require("express");
const router = express.Router();
const {
  getAllStreams,
  createStream,
  deleteStream,
  updateStream,
} = require("../controllers/streamController");
const { verifyToken, isAdmin } = require("../middleware/authMiddleware");

router.get("/getAllstreams", getAllStreams);
router.post("/stream", createStream);
router.delete("/deleteStream/:id", deleteStream);
router.put("/updateStream", updateStream);
module.exports = router;

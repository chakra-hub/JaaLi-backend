const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
// Or allow specific origin(s)
app.use(
  cors({
    origin: "https://jaa-li-frontend.vercel.app/",
    credentials: true,
  })
);
app.use(helmet());
app.use(express.urlencoded({ extended: true }));

app.use("/api", require("./routes/authRoutes"));
app.use("/api", require("./routes/streamRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

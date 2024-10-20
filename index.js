require("dotenv").config();

const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const mongoose = require("mongoose");
const userRouter = require("./routes/user");
const feederRouter = require("./routes/feeder");

const app = express();

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

// routes
app.use("/user", userRouter);
app.use("/feeder", feederRouter);

// Database connectivity
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("db connected"))
  .catch((err) => console.log(err));

app.listen(PORT, () => console.log(`Server started at ${PORT}`));

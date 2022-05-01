const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { mongoose } = require("mongoose");

const authRouter = require('./routes/auth')

const app = express();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Database connected"))
  .catch((error) => console.log(error));

app.use(express.json());
app.use(cors());

app.use('/api/auth', authRouter)

module.exports = app;

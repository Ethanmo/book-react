const mongoose = require("mongoose");
const Book = require("../models/book");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/googlebooks",
    {
      useCreateIndex: true,
      useNewUrlParser: true,
    }
  );
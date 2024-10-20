const mongoose = require("mongoose");

const feederSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  cname: {
    type: String,
    required: true,
  },
  chapter: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
    required: true,
  },
});

const Feeder = mongoose.model("feeder" , feederSchema);

module.exports = Feeder;
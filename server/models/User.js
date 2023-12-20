const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
    trim: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
    trim: true,
  },
  selectedBatch: {
    type: String,
    required: true,
    trim: true,
  },
  enrollmentDate: { type: Date, default: Date.now },
  payment: {
    type: String,
    trim: true,
  },
});
module.exports = mongoose.model("user", userSchema);

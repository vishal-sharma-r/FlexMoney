const User = require("../models/User");
const mongoose = require("mongoose");

exports.userProfile = async (req, res) => {
  try {
    // Basic validations
    const { name, age, selectedBatch, phoneNumber, payment } = req.body;
    if ((!name || !age || !selectedBatch || !phoneNumber, !payment)) {
      return res
        .status(400)
        .json({ error: "Please provide all required information." });
    }
    if (age < 18 || age > 65) {
      return res.status(400).json({ error: "Age must be between 18 and 65." });
    }
    const existingUser = await User.findOne({
      phoneNumber,
    });

    if (existingUser) {
      return res.status(400).json({
        error: "User is already enrolled in the selected batch for this month.",
      });
    }

    const newUser = new User({
      name,
      age,
      phoneNumber,
      selectedBatch,
      payment,
    });
    await newUser.save();

    const paymentResult = CompletePayment(newUser);
    
    res.json({ message: "Enrollment successful.", paymentResult });
  } catch (error) {
    console.error("Error:", error);
    res
      .status(500)
      .json({ error: "Internal server error.", message: error.message });
  }
};


function CompletePayment(user) {
  return 1;
}

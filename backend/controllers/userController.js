const userModel = require("../models/userModel");
exports.register = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      username,
      email,
      password,
      bYear,
      bMonth,
      bDay,
      gender,
    } = req.body;
    const usermodel = await new userModel({
      first_name,
      last_name,
      username,
      email,
      password,
      bYear,
      bMonth,
      bDay,
      gender,
    }).save();
    res.json(usermodel);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

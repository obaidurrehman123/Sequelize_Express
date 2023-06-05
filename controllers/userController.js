const { User } = require("../models");

// Creating User
const addUser = async (req, res) => {
  try {
    const { name, email, role } = req.body;
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }
    const user = await User.create({ name, email, role });
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

// getting all users
const getAllusers = async (req, res) => {
  try {
    const allUsers = await User.findAll();
    res.status(200).json(allUsers);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

// getting single user
const getSingleUser = async (req, res) => {
  try {
    const id = req.params.id;
    const singleUser = await User.findOne({ where: { uuid: id } });
    return res.status(200).json(singleUser);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};
module.exports = { addUser, getAllusers, getSingleUser };

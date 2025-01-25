const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

// Function to create a JWT
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '2d' });
};

// Login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Create a new user
    const user = await User.login(email, password);

    // Create a token for the user
    const token = createToken(user._id);

    // Respond with email and token
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Signup user
const signupUser = async (req, res) => {
  const { email, password, role } = req.body;

  try {
    // Create a new user
    const user = await User.signup(email, password, role);

    // Create a token for the user
    const token = createToken(user._id);

    // Respond with email, token, and role
    res.status(200).json({ email, token, isOrganizer: role === 'organizer' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { signupUser, loginUser };

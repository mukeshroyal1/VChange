
const User = require("../backend/models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id, role) => {
  return jwt.sign({ _id, role }, process.env.SECRET, { expiresIn: "2d" });
};

const signupUser = async (req, res) => {
  const { email, password, role } = req.body;

  try {
    if (!["organizer", "volunteer"].includes(role)) {
      throw new Error("Invalid role");
    }

    const user = await User.signup(email, password, role);
    const token = createToken(user._id, user.role);

    res.status(200).json({ email, token, role: user.role });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const token = createToken(user._id, user.role);

    res.status(200).json({ email, token, role: user.role });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { signupUser, loginUser };

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./userModel');
const config = require('./config');

exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, password: hashedPassword });
    res.status(201).json({ message: 'User created', userId: user.id });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error: error.message });
    console.log(error)
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ userId: user.id }, config.jwtSecret, { expiresIn: '1h' });
    res.json({ message: 'User logged in', token });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error: error.message });
  }
};
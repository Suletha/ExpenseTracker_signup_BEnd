const bcrypt = require('bcrypt');
const User = require('../models/user');

exports.signup = async (req, res, next) => {
  const { name, email, password, confirm_password } = req.body;

    if (password !== confirm_password) {
      return res.status(400).json({ success: false, message: 'Passwords do not match' });
    }

    try {
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
          return res.status(400).json({ success: false, message: 'Email already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ name, email, password: hashedPassword });

        return res.status(201).json({ success: true, user: newUser });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: 'Server error' });
    }
};

  
exports.login = async (req, res, next) => {
    const { email, password } = req.body;
    try {
      // Find the user with the provided email in the database
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(404).json({ success: false, message: 'User not found' });
    }
  
      // Compare the provided password with the hashed password in the database
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ success: false, message: 'Invalid password' });
    }
  
      // Password matches, user is authenticated
      return res.status(200).json({ success: true, user });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ success: false, message: 'Server error' });
    }
};
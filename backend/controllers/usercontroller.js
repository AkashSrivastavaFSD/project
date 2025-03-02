const bcrypt = require('bcryptjs');
const Userreg = require('../models/userregistration.js');

// Register new user

const insertData = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.pw, 10);

    const user = new Userreg({
      ename: req.body.ename,
      email: req.body.email,
      mno: req.body.mno,
      unm: req.body.unm,
      pw: hashedPassword,
     
      role: 'user', // Default role set to 'user'
    });

    await user.save();
    console.log('details',user);
    res.send('Data stored successfully');
  } catch (error) {
    res.status(500).send(error);
  }
};

// Login existing user
 const login = async (req, res) => {
  try {
    const { email, pw } = req.body;
    const user = await Userreg.findOne({ email });

    if (user && (await bcrypt.compare(pw, user.pw))) {
      req.session.unm = user.unm;
      req.session.role = user.role;

      res.status(200).json({ message: 'Login successful', role: user.role ,username: user.unm});
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).send('An error occurred while logging in.');
  }
};

// Function to handle password change
const changePassword = async (req, res) => {
  try {
    const { email, oldPassword, newPassword } = req.body;

    // Find the user by email
    const user = await Userreg.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Compare old password with stored password
    const isMatch = await bcrypt.compare(oldPassword, user.pw);
    if (!isMatch) {
      return res.status(400).json({ message: 'Incorrect old password' });
    }

    // Hash the new password
    const hashedNewPassword = await bcrypt.hash(newPassword, 10);

    // Update the user's password
    user.pw = hashedNewPassword;
    await user.save();

    res.status(200).json({ message: 'Password changed successfully' });
  } catch (error) {
    console.error('Error changing password:', error);
    res.status(500).json({ message: 'An error occurred while changing the password' });
  }
};

// Fetch all users
const getAllUsers = async (req, res) => {
  try {
    const users = await Userreg.find({}, 'email unm'); // Fetch email and username only
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch users.' });
  }
};

// Delete a user by email
 const deleteUser = async (req, res) => {
  const { email } = req.body;
  try {
    await Userreg.findOneAndDelete({ email });
    res.status(200).json({ message: 'User deleted successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete user.' });
  }
};



module.exports = { insertData, login , changePassword,getAllUsers,deleteUser };

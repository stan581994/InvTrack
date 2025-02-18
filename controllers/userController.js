const User = require("../models/user");

const getAllUsers = async (req, res) => {
  //#swagger.tags = ['Users']
  try {
    const users = await User.find();
    res.setHeader("Content-Type", "application/json");
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

  const createUser = async (req, res) => {
    //#swagger.tags = ['Users']

    
    try {
      const newUser = new User({
        userId: req.body.userId,
        username: req.body.username,
        email: req.body.email,
        authProvider: req.body.authProvider,
        authProviderId: req.body.authProviderId,
        createdAt: req.body.createdAt,
      });

       // Check if the userId, email, or authProviderId already exists
    const existingUser = await User.findOne({
      $or: [
        { userId: req.body.userId },
        { email: req.body.email },
        { authProviderId: req.body.authProviderId },
      ],
    });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);

    } catch (error) {
      res.status(500).json({ message: "Server Error" });
    }
  };

const updateUser = async (req, res) => {
  //#swagger.tags = ['Users']
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.userId,
      {
        userId: req.body.userId,
        username: req.body.username,
        email: req.body.email,
        authProvider: req.body.authProvider,
        authProviderId: req.body.authProviderId,
        createdAt: req.body.createdAt,
      },
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getUserById = async (req, res) => {
  //#swagger.tags = ['Users']
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const deleteUser = async (req, res) => {
  //#swagger.tags = ['Users']
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.userId);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  getUserById,
  deleteUser,
};

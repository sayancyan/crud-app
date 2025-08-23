import User from "../models/userModel.js";

// Create a new user
export const create = async (req, res) => {
    try {
        const userData = new User(req.body);
        const savedUser = await userData.save();
        return res.status(201).json({
            message: "User created successfully",
            user: savedUser
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// Get all users
export const getAll = async (req, res) => {
    try {
        const users = await User.find();
        return res.status(200).json({
            message: "Users fetched successfully",
            users
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// Get one user by ID
export const getOne = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json({
            message: "User fetched successfully",
            user
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// Update user by ID
export const update = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json({
            message: "User updated successfully",
            user: updatedUser
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// Delete user by ID
export const deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json({
            message: "User deleted successfully",
            user: deletedUser
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

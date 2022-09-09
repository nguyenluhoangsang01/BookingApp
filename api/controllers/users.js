import User from "../models/User.js";
import { createError } from "../utils/error.js";

// @desc Get all users
export const getUsers = async (req, res, next) => {
  try {
    // Find all the users
    const users = await User.find().select("-__v -password");
    // Check if there are not users
    if (!users) return next(createError(404, "There are not users"));

    // Send the response
    return res.json({
      status: 200,
      success: true,
      message: "Users retrieved successfully",
      users,
    });
  } catch (err) {
    next(err);
  }
};

// @desc Get a user by id
export const getUser = async (req, res, next) => {
  try {
    // Get the id from the request params
    const { id } = req.params;

    // Find the user by id and select all the fields except the _id field
    const user = await User.findById(id).select("-__v -password");
    // Check if the user not found
    if (!user) return next(createError(404, "User not found"));

    // Send the response
    return res.json({
      status: 200,
      success: true,
      message: "User retrieved successfully",
      user,
    });
  } catch (err) {
    next(err);
  }
};

// @desc Delete a user by id
export const deleteUser = async (req, res, next) => {
  try {
    // Get the id from the request params
    const { id } = req.params;

    // Find the user by id and delete it
    const user = await User.findByIdAndDelete(id);
    // Check if the user not found
    if (!user) return next(createError(404, "User not found"));

    // Send the response
    return res.json({
      status: 200,
      success: true,
      message: "User deleted successfully",
    });
  } catch (err) {
    next(err);
  }
};

// @desc Update a user by id
export const updateUser = async (req, res, next) => {
  try {
    // Get the id from the request params
    const { id } = req.params;

    // Find the user by id and select all the fields except the _id field
    const payload = req.body;
    const options = {
      new: true,
    };
    const user = await User.findByIdAndUpdate(id, payload, options);
    // Check if the user not found
    if (!user) return next(createError(404, "User not found"));

    // Send the response
    return res.json({
      status: 200,
      success: true,
      message: "User updated successfully",
    });
  } catch (err) {
    next(err);
  }
};

// @desc Get check user authentication
export const checkAuthentication = (req, res, next) => {
  try {
    // Send the response
    return res.json({
      status: 200,
      success: true,
      isAuthenticated: true,
      message: "User authenticated successfully",
    });
  } catch (err) {
    next(err);
  }
};

// @desc Get user
export const checkUser = (req, res, next) => {
  try {
    // Send the response
    return res.json({
      status: 200,
      success: true,
      message: "You are authorized as a user to do this action",
    });
  } catch (err) {
    next(err);
  }
};

// @desc Get admin
export const checkAdmin = (req, res, next) => {
  try {
    // Send the response
    return res.json({
      status: 200,
      success: true,
      message: "You are authorized as a admin to do this action",
    });
  } catch (err) {
    next(err);
  }
};

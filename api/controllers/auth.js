import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { createError } from "../utils/error.js";

// @desc Register a user
export const register = async (req, res, next) => {
  try {
    // Get the user from the request body
    const { username, email, password, repeatPassword } = req.body;

    // Check if username is empty
    if (!username) return next(createError(400, "Username is required"));
    // Check if email is empty
    else if (!email) return next(createError(400, "Email is required"));
    // Check if password is empty
    else if (!password) return next(createError(400, "Password is required"));
    // Check if repeatPassword is empty
    else if (!repeatPassword)
      return next(createError(400, "Repeat password is required"));

    // Check if user already exists with the same username
    const userWithUsername = await User.findOne({ username });
    if (userWithUsername)
      return next(createError(400, "Username already exists"));

    // Check if user already exists with the same email
    const userWithEmail = await User.findOne({ email });
    if (userWithEmail) return next(createError(400, "Email already exists"));

    // Check if passwords not match
    if (password !== repeatPassword)
      return next(createError(400, "Passwords do not match"));

    // Hash the password
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);

    // Create the user
    const newUser = new User({
      ...req.body,
      password: hash,
    });
    await newUser.save();

    // Send the response
    return res.json({
      status: 200,
      success: true,
      message: "User registered successfully",
    });
  } catch (err) {
    next(err);
  }
};

// @desc Login a user
export const login = async (req, res, next) => {
  try {
    // Get the user from the request body
    const { username } = req.body;

    // Check if username is empty
    if (!username) return next(createError(400, "Username is required"));
    // Check if password is empty
    else if (!req.body.password)
      return next(createError(400, "Password is required"));

    // Find the user with the username
    const user = await User.findOne({ username });
    if (!user) return next(createError(404, "Username does not exist"));

    // Check if the password is correct
    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(createError(400, "Password is incorrect"));

    // Create a token
    const payload = {
      id: user._id,
      isAdmin: user.isAdmin,
    };
    const jwtSecret = process.env.JWT_SECRET;
    const options = {
      expiresIn: process.env.JWT_EXPIRES_IN,
    };
    const token = jwt.sign(payload, jwtSecret, options);

    // Get the user without the password
    const { password, __v, ...userWithoutPassword } = user._doc;

    // Send the response
    return res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .json({
        status: 200,
        success: true,
        message: "User logged in successfully",
        user: userWithoutPassword,
      });
  } catch (err) {
    next(err);
  }
};

// @desc Reset a user password
export const reset = async (req, res, next) => {
  try {
    // Get the user from the request body
    const { email, newPassword, repeatPassword } = req.body;

    // Check if email is empty
    if (!email) return next(createError(400, "Email is required"));
    // Check if newPassword is empty
    else if (!newPassword)
      return next(createError(400, "New password is required"));
    // Check if repeatPassword is empty
    else if (!repeatPassword)
      return next(createError(400, "Repeat password is required"));

    // Find the user with the email
    const userWithEmail = await User.findOne({ email });
    if (!userWithEmail) return next(createError(404, "Email does not exist"));

    // Check if newPassword and repeatPassword not match
    if (newPassword !== repeatPassword)
      return next(createError(400, "Passwords do not match"));

    // Hash the password
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(newPassword, salt);

    // Update the user
    const id = userWithEmail._id;
    const payload = {
      password: hash,
    };
    const options = {
      new: true,
    };
    await User.findByIdAndUpdate(id, payload, options);

    // Send the response
    return res.json({
      status: 200,
      success: true,
      message: "Password reset successfully",
    });
  } catch (err) {
    next(err);
  }
};

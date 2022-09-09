import express from "express";
import {
  checkAdmin,
  checkAuthentication,
  checkUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/users.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// @route GET api/users/auth
// @desc Get check user authentication
// @access Private
router.get("/auth", verifyToken, checkAuthentication);

// @route GET api/users/auth/user/:id
// @desc Get user
// @access Private
router.get("/auth/user/:id", verifyToken, verifyUser, checkUser);

// @route GET api/users/auth/admin/:id
// @desc Get admin
// @access Private
router.get("/auth/admin/:id", verifyToken, verifyAdmin, checkAdmin);

// @route GET api/users
// @desc Get all users
// @access Private
router.get("/", verifyToken, verifyAdmin, getUsers);

// @route GET api/users/:id
// @desc Get a user by id
// @access Private
router.get("/:id", verifyToken, verifyUser, getUser);

// @route DELETE api/users/:id
// @desc Delete a user by id
// @access Private
router.delete("/:id", verifyToken, verifyAdmin, deleteUser);

// @route PUT api/users/:id
// @desc Update a user by id
// @access Private
router.put("/:id", verifyToken, verifyUser, updateUser);

export default router;

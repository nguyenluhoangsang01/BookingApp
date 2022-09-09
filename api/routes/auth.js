import express from "express";
import { login, register, reset } from "../controllers/auth.js";

const router = express.Router();

// @route POST api/auth/register
// @desc Register a user
// @access Public
router.post("/register", register);

// @route POST api/auth/login
// @desc Login a user
// @access Public
router.post("/login", login);

// @route PUT api/auth/reset
// @desc Reset a user password
// @access Public
router.put("/reset", reset);

export default router;

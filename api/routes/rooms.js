import express from "express";
import {
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
} from "../controllers/rooms.js";
import { verifyAdmin, verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

// @route POST api/rooms
// @desc Create a room
// @access Private
router.post("/:hotelId", verifyToken, verifyAdmin, createRoom);

// @route GET api/rooms
// @desc Get all rooms
// @access Public
router.get("/", getRooms);

// @route GET api/rooms/:id
// @desc Get a room by id
// @access Public
router.get("/:id", getRoom);

// @route PUT api/rooms/:id
// @desc Update a room by id
// @access Private
router.put("/:id", verifyToken, verifyAdmin, updateRoom);

// @route DELETE api/rooms/:id
// @desc Delete a room by id
// @access Private
router.delete("/:id/:hotelId", verifyToken, verifyAdmin, deleteRoom);

export default router;

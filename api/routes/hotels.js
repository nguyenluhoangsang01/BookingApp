import express from "express";
import {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getHotel,
  getHotelRooms,
  getHotels,
  updateHotel,
} from "../controllers/hotels.js";
import { verifyAdmin, verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

// @route POST api/hotels
// @desc Create a hotel
// @access Private
router.post("/", verifyToken, verifyAdmin, createHotel);

// @route GET api/hotels
// @desc Get all hotels
// @access Public
router.get("/", getHotels);

// @route GET api/hotels/:id
// @desc Get a hotel by id
// @access Public
router.get("/find/:id", getHotel);

// @route PUT api/hotels/:id
// @desc Update a hotel by id
// @access Private
router.put("/:id", verifyToken, verifyAdmin, updateHotel);

// @route DELETE api/hotels/:id
// @desc Delete a hotel by id
// @access Private
router.delete("/:id", verifyToken, verifyAdmin, deleteHotel);

// @route GET api/hotels/countByCity
// @desc Count hotels by city
// @access Public
router.get("/countByCity", countByCity);

// @route GET api/hotels/countByType
// @desc Count hotels by type
// @access Public
router.get("/countByType", countByType);

// @route GET api/hotels/rooms/:id
router.get("/rooms/:id", getHotelRooms);

export default router;

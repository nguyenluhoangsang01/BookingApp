import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";
import { createError } from "../utils/error.js";

// @desc Create a room
export const createRoom = async (req, res, next) => {
  try {
    // Get hotel id from request params
    const { hotelId } = req.params;
    // Get data from request body
    const { title, price, maxPeople, description } = req.body;

    // Check if title is empty
    if (!title) return next(createError(400, "Title is required"));
    // Check if price is empty
    if (!price) return next(createError(400, "Price is required"));
    // Check if maxPeople is empty
    if (!maxPeople) return next(createError(400, "Max people is required"));
    // Check if description is empty
    if (!description) return next(createError(400, "Description is required"));

    // Check if room title already exists
    const roomWithTitle = await Room.findOne({ title });
    if (roomWithTitle)
      return next(createError(400, "Room title already exists"));

    // Create new room
    const newRoom = new Room(req.body);
    await newRoom.save();

    // Find hotel by id and update rooms it with new room id
    const payload = { $push: { rooms: newRoom._id } };
    const hotel = await Hotel.findByIdAndUpdate(hotelId, payload);
    if (!hotel)
      return next(createError(404, "Hotel not found to create a new room"));

    // Send the response
    return res.json({
      status: 200,
      success: true,
      message: "Room created successfully",
    });
  } catch (err) {
    next(err);
  }
};

// @desc Update a room
export const updateRoom = async (req, res, next) => {
  try {
    // Get room id from request params
    const { id } = req.params;
    // Get title from the request body
    const { title } = req.body;

    // Check if the room id exists
    const room = await Room.findById(id);
    if (!room) return next(createError(404, "Room not found"));

    // Find the room with the same title
    const roomWithTitle = await Room.findOne({ title });
    // Check if the room with the same title exists
    if (roomWithTitle)
      return next(createError(400, "Room title already exists"));

    // Update the room
    const payload = { $set: req.body };
    const options = { new: true };
    await Room.findByIdAndUpdate(id, payload, options);

    // Send the response
    return res.json({
      status: 200,
      success: true,
      message: "Room updated successfully",
    });
  } catch (err) {
    next(err);
  }
};

// @desc Get all rooms
export const getRooms = async (req, res, next) => {
  try {
    // Find all the rooms
    const rooms = await Room.find().select("-__v");
    // Check if rooms exists
    if (!rooms) return next(createError(404, "Rooms not found"));

    // Send the response
    return res.json({
      status: 200,
      success: true,
      message: "Rooms retrieved successfully",
      rooms,
    });
  } catch (err) {
    next(err);
  }
};

// @desc Get a room by id
export const getRoom = async (req, res, next) => {
  try {
    // Get room id from request params
    const { id } = req.params;

    // Find the room by id and select all the fields except __v field
    const room = await Room.findById(id).select("-__v");
    // Check if room not exists
    if (!room) return next(createError(404, "Room not found"));

    // Send the response
    return res.json({
      status: 200,
      success: true,
      message: "Room retrieved successfully",
      room,
    });
  } catch (err) {
    next(err);
  }
};

// @desc Delete a room by id
export const deleteRoom = async (req, res, next) => {
  try {
    // Get room id from request params
    const { id, hotelId } = req.params;

    // Find the room by id and delete it
    const room = await Room.findByIdAndDelete(id);
    // Check if room not exists
    if (!room) return next(createError(404, "Room not found"));

    // Find hotel by id and update rooms it with new room id
    const payload = { $pull: { rooms: id } };
    const hotel = await Hotel.findByIdAndUpdate(hotelId, payload);
    if (!hotel)
      return next(createError(404, "Hotel not found to create a new room"));

    // Send the response
    return res.json({
      status: 200,
      success: true,
      message: "Room deleted successfully",
    });
  } catch (err) {
    next(err);
  }
};

export const updateRoomAvailability = async (req, res, next) => {
  try {
    // Get room id from request params
    const { id } = req.params;
    // Get availability from request body
    const { dates } = req.body;
    // Check if dates is empty
    if (!dates) return next(createError(400, "Dates are required"));

    const roomNumberId = { "roomNumbers._id": id };
    // Check if the room id exists
    const room = await Room.findOne(roomNumberId);
    if (!room) return next(createError(404, "Room number not found"));

    // Update the room
    const payload = { $push: { "roomNumbers.$.unavailableDates": dates } };
    const options = { new: true };
    await Room.updateOne(roomNumberId, payload, options);

    // Send the response
    return res.json({
      status: 200,
      success: true,
      message: "Room updated successfully",
    });
  } catch (err) {
    next(err);
  }
};

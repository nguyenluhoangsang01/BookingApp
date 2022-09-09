import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";
import { createError } from "../utils/error.js";

// @desc Create a hotel
export const createHotel = async (req, res, next) => {
  try {
    // Get all the data from the request body
    const {
      name,
      type,
      city,
      address,
      distance,
      title,
      description,
      cheapestPrice,
    } = req.body;

    // Check if name is empty
    if (!name) return next(createError(400, "Name is required"));
    // Check if type is empty
    else if (!type) return next(createError(400, "Type is required"));
    // Check if city is empty
    else if (!city) return next(createError(400, "City is required"));
    // Check if address is empty
    else if (!address) return next(createError(400, "Address is required"));
    // Check if distance is empty
    else if (!distance) return next(createError(400, "Distance is required"));
    // Check if title is empty
    else if (!title) return next(createError(400, "Title is required"));
    // Check if description is empty
    else if (!description)
      return next(createError(400, "Description is required"));
    // Check if cheapestPrice is empty
    else if (!cheapestPrice)
      return next(createError(400, "Cheapest price is required"));

    // Check if the hotel already exists
    const hotelWithName = await Hotel.findOne({ name });
    if (hotelWithName)
      return next(createError(404, "Hotel name already exists"));

    // Create the hotel
    const newHotel = new Hotel(req.body);
    await newHotel.save();

    // Send the response
    return res.json({
      status: 200,
      success: true,
      message: "Hotel created successfully",
    });
  } catch (err) {
    next(err);
  }
};

// @desc Update a hotel
export const updateHotel = async (req, res, next) => {
  try {
    // Get hotel id from the request params
    const { id } = req.params;
    // Get name from the request body
    const { name } = req.body;

    // Check if the hotel id exists
    const hotel = await Hotel.findById(id);
    if (!hotel) return next(createError(404, "Hotel not found"));

    // Find the hotel with the same name
    const hotelWithName = await Hotel.findOne({ name });
    // Check if the hotel with the same name exists
    if (hotelWithName)
      return next(createError(400, "Hotel name already exists"));

    // Update the hotel
    const payload = { $set: req.body };
    const options = { new: true };
    await Hotel.findByIdAndUpdate(id, payload, options);

    // Send the response
    return res.json({
      status: 200,
      success: true,
      message: "Hotel updated successfully",
    });
  } catch (err) {
    next(err);
  }
};

// @desc Get all hotels
export const getHotels = async (req, res, next) => {
  try {
    // Get min and max price from the request query
    const { minPrice, maxPrice, minDistance, maxDistance, limit, ...others } =
      req.query;
    // Find all the hotels
    const hotels = await Hotel.find({
      ...others,
      distance: {
        $gte: minDistance || 1,
        $lte: maxDistance || 999999999999999,
      },
      cheapestPrice: {
        $gte: minPrice || 1,
        $lte: maxPrice || 999999999999999,
      },
    })
      .limit(limit)
      .select("-__v");
    // Check if there are not hotels
    if (!hotels) return next(createError(404, "Hotels not found"));

    // Send the response
    return res.json({
      status: 200,
      success: true,
      message: "Hotels retrieved successfully",
      hotels,
    });
  } catch (err) {
    next(err);
  }
};

// @desc Get a hotel by id
export const getHotel = async (req, res, next) => {
  try {
    // Get hotel id from the request params
    const { id } = req.params;

    // Find the hotel by id and select all the fields except the _id field
    const hotel = await Hotel.findById(id).select("-__v");
    // Check if the hotel not found
    if (!hotel) return next(createError(404, "Hotel not found"));

    // Send the response
    return res.json({
      status: 200,
      success: true,
      message: "Hotel retrieved successfully",
      hotel,
    });
  } catch (err) {
    next(err);
  }
};

// @desc Delete a hotel by id
export const deleteHotel = async (req, res, next) => {
  try {
    // Get hotel id from the request params
    const { id } = req.params;

    // Find the hotel by id and delete it
    const hotel = await Hotel.findByIdAndDelete(id);
    // Check if the hotel not exists
    if (!hotel) return next(createError(404, "Hotel not found"));

    // Send the response
    return res.json({
      status: 200,
      success: true,
      message: "Hotel deleted successfully",
    });
  } catch (err) {
    next(err);
  }
};

// @desc Count hotels by city
export const countByCity = async (req, res, next) => {
  try {
    // Get cities from request query
    const { cities } = req.query;
    if (!cities) return next(createError(404, "Cities not found"));

    // Check if cities is empty
    const list = await Promise.all(
      cities.split(",").map((city) => Hotel.countDocuments({ city }))
    );

    return res.json({
      status: 200,
      success: true,
      message: "Count hotels by city successfully",
      list,
    });
  } catch (err) {
    next(err);
  }
};

// @desc Count hotels by type
export const countByType = async (req, res, next) => {
  try {
    const hotelCount = await Hotel.countDocuments({ type: "hotel" });
    const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
    const resortCount = await Hotel.countDocuments({ type: "resort" });
    const villaCount = await Hotel.countDocuments({ type: "villa" });
    const cabinCount = await Hotel.countDocuments({ type: "cabin" });

    return res.json({
      status: 200,
      success: true,
      message: "Count hotels by type successfully",
      list: [
        { type: "hotels", count: hotelCount },
        { type: "apartments", count: apartmentCount },
        { type: "resorts", count: resortCount },
        { type: "villas", count: villaCount },
        { type: "cabins", count: cabinCount },
      ],
    });
  } catch (err) {
    next(err);
  }
};

export const getHotelRooms = async (req, res, next) => {
  try {
    // Get id from request params
    const { id } = req.params;

    // Find the hotel by id
    const hotel = await Hotel.findById(id);
    if (!hotel) return next(createError(404, "Hotel not found"));

    // Get rooms from the hotel
    const rooms = hotel.rooms;
    // Check if there are not rooms
    if (!rooms) return next(createError(404, "Rooms not found"));
    const list = await Promise.all(
      rooms.map(async (room) => {
        return await Room.findById(room);
      })
    );

    // Send the response
    return res.json({
      status: 200,
      success: true,
      message: "Hotel rooms retrieved successfully",
      rooms: list,
    });
  } catch (err) {
    next(err);
  }
};

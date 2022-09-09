import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req, res, next) => {
  try {
    // Get token from header
    const token = req.cookies.access_token;
    // Check if token is present
    if (!token) return next(createError(401, "You are not authenticated"));

    // Verify token
    const jwtSecret = process.env.JWT_SECRET;
    jwt.verify(token, jwtSecret, function (err, decoded) {
      if (err) return next(createError(498, "Invalid token"));

      req.user = decoded;
      next();
    });
  } catch (err) {
    next(err);
  }
};

export const verifyUser = (req, res, next) => {
  // Get user from request
  const { user } = req;
  // Get user id from request params
  const { id } = req.params;

  // Check if user id is equal to user id from request params and if user is an admin
  user.id === id || user.isAdmin
    ? next()
    : next(createError(403, "You are not authorized to do this action"));
};

export const verifyAdmin = (req, res, next) => {
  // Get user from request
  const { user } = req;

  // Check if user is admin
  user.isAdmin
    ? next()
    : next(createError(403, "You are not authorized to do this action"));
};

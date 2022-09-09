import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import authRouter from "./routes/auth.js";
import hotelsRouter from "./routes/hotels.js";
import roomsRouter from "./routes/rooms.js";
import usersRouter from "./routes/users.js";

// Use express to create the server
const app = express();
// Use dotenv to load environment variables from .env file
dotenv.config();

// Constants for the server
const port = process.env.PORT;
const uri = process.env.MONGO_URI;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

//* Middleware for the server
// Use cors to allow cross-origin requests
app.use(cors());
// Use cookie-parser to parse the cookies of the request
app.use(cookieParser());
// Use body-parser to parse the body of the request
app.use(bodyParser.json());
// Use express json to parse the body of the request
app.use(express.json());
// Use listen to start the server
app.listen(port, () => console.log(`Server started on port ${port}`));

//* Use mongoose to connect to the database
mongoose.connect(uri, options);
const db = mongoose.connection;
db.on("connected", () => console.log("MongoDB connected"));
db.on("disconnected", () => console.log("MongoDB disconnected"));
db.on("error", (error) => console.log(error));

//* Use routes to define the routes of the server
app.use("/api/auth", authRouter);
app.use("/api/hotels", hotelsRouter);
app.use("/api/rooms", roomsRouter);
app.use("/api/users", usersRouter);

//* Handle error
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const success = false;
  const message = err.message || "Something went wrong!";

  return res.status(status).json({ status, success, message });
});

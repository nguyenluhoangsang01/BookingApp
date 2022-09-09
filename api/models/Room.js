import mongoose from "mongoose";
const { Schema, model } = mongoose;

const schema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
  maxPeople: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  roomNumbers: [
    {
      number: Number,
      unavailableDates: [
        {
          type: [Date],
        },
      ],
    },
  ],
});

export default model("Room", schema);

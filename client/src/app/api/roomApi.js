import axios from "axios";
import { API_URL_ROOMS } from "./constants";

export const updateRoomAvailability = (id, dates) =>
  axios.put(`${API_URL_ROOMS}/availability/${id}`, dates);

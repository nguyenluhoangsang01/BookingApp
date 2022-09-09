import axios from "axios";
import { API_URL_ROOMS } from "./constants";

export const getRooms = () => axios.get(API_URL_ROOMS);
export const getRoom = (id) => axios.get(`${API_URL_ROOMS}/${id}`);

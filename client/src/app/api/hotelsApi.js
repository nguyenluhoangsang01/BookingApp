import axios from "axios";
import { API_URL_HOTELS } from "./constants";

export const countHotelsByCity = (query) =>
  axios.get(`${API_URL_HOTELS}/countByCity?cities=${query}`);

export const countHotelByType = () =>
  axios.get(`${API_URL_HOTELS}/countByType`);

export const getHotelsWithFilterTrue = (query) =>
  axios.get(`${API_URL_HOTELS}?featured=true&&${query}&&limit=4`);

export const getHotelsByCity = (destination, minPrice, maxPrice) =>
  axios.get(
    `${API_URL_HOTELS}?city=${destination}&&minPrice=${minPrice}&&maxPrice=${maxPrice}`
  );

export const getHotel = (id) => axios.get(`${API_URL_HOTELS}/find/${id}`);

export const getHotelRoom = (id) => axios.get(`${API_URL_HOTELS}/rooms/${id}`);

export const getHotels = () => axios.get(`${API_URL_HOTELS}`);

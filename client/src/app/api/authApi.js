import axios from "axios";
import { API_URL_AUTH } from "./constants";

export const login = (form) => axios.post(`${API_URL_AUTH}/login`, form);

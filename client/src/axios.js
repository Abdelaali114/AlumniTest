import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "http://192.168.60.254:3001/api/",
  withCredentials: true,
});




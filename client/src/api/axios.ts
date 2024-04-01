import axios from "axios";

const intances = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true,
});

export default intances;

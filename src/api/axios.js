import axios from "axios";
// import { AuthStore } from "store/contexts/AuthContext";

const user = JSON.parse(localStorage.getItem("user")) || {};
let token = user?.access_token;

export default axios.create({
  // baseURL: "http://50.18.54.50:8000",
  baseURL: "https://api.starfinder.hng.tech",
  headers: { Authorization: "bearer " + token }
});

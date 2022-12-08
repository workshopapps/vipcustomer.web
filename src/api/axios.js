import axios from "axios";
// import { AuthStore } from "store/contexts/AuthContext";

const user = JSON.parse(localStorage.getItem("user")) || {};
let token = user?.access_token;

export default axios.create({
  baseURL: "https://api.starfinder.hng.tech",
  headers: { Authorization: "bearer " + token }
});

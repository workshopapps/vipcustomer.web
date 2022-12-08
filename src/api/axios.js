import axios from "axios";
// import { AuthStore } from "store/contexts/AuthContext";

const user = JSON.parse(localStorage.getItem("user")) || {};
let accessToken = user?.access_token;
const refreshToken = user?.refresh_token;

const request = axios.create({
  // baseURL: "http://50.18.54.50:8000",
  baseURL: "https://api.starfinder.hng.tech",
  headers: { Authorization: "Bearer " + accessToken }
});

export default request;

request.interceptors.response.use(
  (response) => response,
  async function (error) {
    if (error?.response?.status === 403 && refreshToken) {
      const previousRequest = error?.config;
      const { data } = await request.post(
        "/api/user/refresh_token",
        {},
        {
          headers: { Authorization: "Bearer " + refreshToken }
        }
      );
      const newAccessToken = data.access_token;
      accessToken = user["access_token"] = newAccessToken;
      localStorage.setItem("user", JSON.stringify(user));
      previousRequest.headers["Authorization"] = "Bearer " + newAccessToken;
      return request(previousRequest);
    }

    return Promise.reject(error);
  }
);

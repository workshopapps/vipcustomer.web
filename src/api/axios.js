import axios from "axios";
// import { AuthStore } from "store/contexts/AuthContext";

const user = JSON.parse(localStorage.getItem("user")) || {};
let accessToken = user?.access_token;
const refreshToken = user?.refresh_token;
let accessTokenHasBeenRefreshed = false; //vairable to prevent infinite loops in case of other authorization errors

const request = axios.create({
  // baseURL: "http://50.18.54.50:8000",
  baseURL: "https://api.starfinder.hng.tech",
  headers: { Authorization: "Bearer " + accessToken }
});

export default request;

request.interceptors.response.use(
  (response) => response,
  async function (error) {
    const isUnauthorizedError =
      error?.response?.status === 403 || error?.response?.status === 401;
    if (isUnauthorizedError && refreshToken && !accessTokenHasBeenRefreshed) {
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
      accessTokenHasBeenRefreshed = true;
      return request(previousRequest);
    }

    accessTokenHasBeenRefreshed = false;
    return Promise.reject(error);
  }
);

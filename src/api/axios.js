import axios from "axios";
import { AuthStore } from "store/contexts/AuthContext";
import { login_a } from "store/actions/authActions";

const user = JSON.parse(localStorage.getItem("user")) || {};
const accessToken = user?.access_token;
const refreshToken = user?.refresh_token;

const request = axios.create({
  // baseURL: "http://50.18.54.50:8000",
  baseURL: "https://api.starfinder.hng.tech",
  headers: { Authorization: "bearer " + accessToken }
});

export default request;

request.interceptors.response.use(
  (response) => response,
  async function (error) {
    if (error?.response?.status === 403 && refreshToken) {
      const previousRequest = error?.config;
      const newAccessToken = await request.get("/api/user/refresh_token", {
        headers: { Authorization: "bearer " + refreshToken }
      });
      previousRequest.headers["Authorization"] = "bearer " + newAccessToken;
      updateLocalStorageAndContextState(newAccessToken);
      return request(previousRequest);
    }

    return Promise.reject(error);
  }
);

function updateLocalStorageAndContextState(newAccessToken) {
  user.accessToken = newAccessToken;
  const { dispatch } = AuthStore;
  login_a(dispatch, user);
}

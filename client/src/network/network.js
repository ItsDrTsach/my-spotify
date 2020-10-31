import axios from "axios";
import Cookies from "js-cookie";

const network = axios.create({});

const getToken = () => Cookies.get("accessToken");

network.interceptors.request.use((config) => {
  config.headers.authorization = `Bearer ${getToken()}`;
  return config;
});

network.interceptors.response.use(
  ({ data }) => data,
  async (error) => {
    const status = error.response ? error.response.status : null;
    const originalRequest = error.config;

    if (status === 408) {
      try {
        await network.post("/users/token", {
          token: Cookies.get("refreshToken"),
        });
        const data = await network(originalRequest);
        return data;
      } catch (e) {
        return e;
      }
    } else {
      return Promise.reject(error.response.data);
    }
  }
);

export default network;

// axiosInstance.js
import axios from "axios";

const API_BASE_URL = "https://api.apluscounselling.com:8443/api/Hospital";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Only retry on 401
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const email = localStorage.getItem("email");
      const password = localStorage.getItem("password");

      if (!email || !password) {
        console.warn("No stored credentials. Redirecting to login or handling gracefully.");
        // Optionally redirect to login or show notification here
        return Promise.reject(new Error("No credentials stored for auto-login."));
      }

      try {
        const loginResponse = await axios.get(`${API_BASE_URL}/Login`, {
          params: { Email: email, Password: password },
        });

        const newToken = loginResponse.data.token;
        localStorage.setItem("token", newToken);

        // Retry original request with new token
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return axiosInstance(originalRequest);
      } catch (loginError) {
        console.error("Auto login failed:", loginError);
        return Promise.reject(loginError);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;

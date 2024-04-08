import axios from "axios";

export class AxiosMiddleware {
  static boot() {
    axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL + "api/";
    axios.defaults.headers.common["Content-Type"] = `application/json`;
    axios.defaults.headers.common["Accept"] = `application/json`;
    axios.interceptors.request.use(
      (config) => {
        const token = localStorage?.getItem("token");
        if (token && token !== null) {
          config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );
    axios.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        switch (error?.response?.status) {
          case 401:
            window.location.href = "/login";
            return;
          default:
            throw error;
        }
      },
    );
  }
}

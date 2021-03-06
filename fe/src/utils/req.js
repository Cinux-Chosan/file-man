import axios from "axios";

const req = axios.create();

req.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("access_token");
  config.headers["Authorization"] = `Bearer ${accessToken}`;
  return config;
});

req.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    const { status, data } = response;
    if (status >= 200 && status < 400) {
      return data;
    }
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default req;

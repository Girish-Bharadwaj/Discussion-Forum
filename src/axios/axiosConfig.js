import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/",
});

instance.interceptors.request.use(
  (config) => {
    const token =
      "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6IkFkbWluMSIsImVtYWlsSWQiOiJhZG1pbjFAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkZGRTamRieDlER2J0WFJBa3FYcFhFZVh2MnAwYjFPaFNuZXFyd3lwQWxTbkhNVzVydXFZOXUiLCJwb3N0ZXNDcmVhdGVkIjpbXSwicG9zdGVzVm90ZWQiOltdLCJ0YWdzIjpbXSwiX2lkIjoiNjJjNzE2ODE5NjY3NzZmNTdjM2VkOWYwIiwiX192IjowfQ.6OzkTy-wA5Aa5jQzIDSeCWWqAfhCsVvNFcQyVChm7Ak";
    config.headers.Authorization = `${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;

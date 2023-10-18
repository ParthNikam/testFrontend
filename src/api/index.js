// client/src/api/index.js
import axios from 'axios';

const baseURL = 'http://127.0.0.1:5000'; // Replace with your actual base API URL
// const baseURL = "https://trym-backend.onrender.com"

const api = axios.create({
  baseURL,
});

export const fetchUsersByName = (name) => api.get(`/?name=${name}`);
export const fetchUserProfileByID = (userId) => api.get(`/profile/${userId}`);


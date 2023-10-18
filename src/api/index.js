// client/src/api/index.js
import axios from 'axios';

const baseURL = 'https://testbackend-brgm.onrender.com'; // Replace with your actual base API URL


const api = axios.create({
  baseURL,
});

export const fetchUsersByName = (name) => api.get(`/?name=${name}`);
export const fetchUserProfileByID = (userId) => api.get(`/profile/${userId}`);


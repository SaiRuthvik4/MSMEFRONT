import axios from 'axios';

const api = axios.create({
    baseURL: 'https://msme-backend.onrender.com/api/applicants', // backend URL
});

export default api;

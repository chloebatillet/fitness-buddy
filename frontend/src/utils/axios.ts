import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://fitness-buddy-api.onrender.com/',
});

export default axiosInstance;

// headers: {
//   Authorization: `Bearer ${localStorage.getItem('token')}`,
// },

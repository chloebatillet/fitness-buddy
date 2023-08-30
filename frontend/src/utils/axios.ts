import axios from 'axios';

console.log('dans utils', localStorage.getItem('token'));


const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  // headers: {
  //   Authorization: `Bearer ${localStorage.getItem('token')}`,
  // },
});

export default axiosInstance;


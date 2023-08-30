import axios from 'axios';


export default axios.create({
  baseURL: 'https://orecipes-api.onrender.com/api/',
  headers: {
    Authorization:
      `Bearer ${localStorage.getItem('token')}`,
  },
});

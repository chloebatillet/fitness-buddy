import axios from 'axios';

export default axios.create({
  baseURL: 'https://orecipes-api.onrender.com/api/',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTY5MzIzNzAyMiwiZXhwIjoxNjkzMjQwNjIyfQ.B9gk9-j-2-JBPKAdTw45_FYq3kphgaOIr3Hk8F9hoIE',
  },
});

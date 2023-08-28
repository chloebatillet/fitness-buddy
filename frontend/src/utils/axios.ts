import axios from 'axios';

export default axios.create({
  baseURL: 'https://orecipes-api.onrender.com/api/',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTY5MzIyOTA1NSwiZXhwIjoxNjkzMjMyNjU1fQ.t7y5RwnG4b74UJGNSTcyBj8GCM7kStt6uDTvFTmT96A',
  },
});

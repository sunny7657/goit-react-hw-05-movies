import axios from 'axios';

const apiKey = '7ff77d6c83d2307b93a470517dba345c';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: { api_key: apiKey },
});

export const trendMovies = instance
  .get('/trending')
  .then(resp => console.log(resp))
  .catch(err => console.log(err));

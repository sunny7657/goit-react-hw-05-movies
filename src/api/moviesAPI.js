import axios from 'axios';

const apiKey = '7ff77d6c83d2307b93a470517dba345c';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: { api_key: apiKey },
});

export const trendMovies = async () => {
  const { data } = await instance.get('/trending/movie/day');
  return data;
};

export const searchMovies = async query => {
  const { data } = await instance.get(`/search/movie?query=${query}`);
  return data;
};

export const getMovieInfo = async movieId => {
  const { data } = await instance.get(`/movie/${movieId}`);
  return data;
};

export const getCast = async movieId => {
  const { data } = await instance.get(`/movie/${movieId}/credits`);
  return data;
};

export const getReviews = async movieId => {
  const { data } = await instance.get(`/movie/${movieId}/reviews`);
  return data;
};

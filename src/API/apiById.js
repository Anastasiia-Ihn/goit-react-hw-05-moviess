import axios from 'axios';
import { BASE_URL, key } from '../utils/constants';

// const key = '84201912ed7e3ce22261b9e0387010b4';
// const BASE_URL = 'https://api.themoviedb.org/3/movie';

export const fetchDataById = async movieId => {
  const params = new URLSearchParams({
    language: 'en-US',
    api_key: key,
  });
  const resp = await axios.get(`${BASE_URL}/${movieId}?${params}`);
  return resp.data;
};
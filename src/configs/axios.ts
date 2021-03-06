import axios from 'axios';
import { API_URL } from 'react-native-dotenv';

export const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 5000,
});

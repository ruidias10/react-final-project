import axios from 'axios';
import config from '../config/Config.json';

const { baseURL } = config;
const Api = axios.create({baseURL});

export default Api;
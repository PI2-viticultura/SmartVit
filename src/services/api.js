  
import axios from 'axios'
import { getToken } from './auth';

const api =  axios.create({
    baseURL: 'http://localhost:8000',
});

api.interceptors.request.use(async configure => {
    const token = getToken();
    if(token){
        configure.headers.Authorization = `Bearer ${token}`
    }
    return configure;
});

export default api;
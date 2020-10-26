  
import axios from 'axios'
import { getToken } from './auth';

const baseUrl = process.env.REACT_APP_URL_USER;

const apiUser =  axios.create({
    baseURL: baseUrl,
});

apiUser.interceptors.request.use(async configure => {
    const token = getToken();
    if(token){
        configure.headers.Authorization = `Bearer ${token}`
    }
    return configure;
});

export default apiUser;
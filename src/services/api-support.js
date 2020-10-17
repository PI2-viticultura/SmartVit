  
import axios from 'axios'

const baseUrl = process.env.URL_SUPPORT;

const apiFeedback =  axios.create({
    baseURL: baseUrl,
});

export default apiSupport;
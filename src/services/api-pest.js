  
import axios from 'axios'

const baseUrl = process.env.URL_PEST;

const apiFeedback =  axios.create({
    baseURL: baseUrl,
});

export default apiPest;
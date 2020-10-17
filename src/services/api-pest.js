  
import axios from 'axios'

const baseUrl = process.env.URL_PEST;

const apiPest =  axios.create({
    baseURL: baseUrl,
});

export default apiPest;
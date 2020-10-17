  
import axios from 'axios'

const baseUrl = process.env.URL_SUPPORT;

console.log(baseUrl);

const apiSupport =  axios.create({
    baseURL: baseUrl,
});

export default apiSupport;
  
import axios from 'axios'

const baseUrl = process.env.REACT_APP_URL_SUPPORT;

console.log(baseUrl);

const apiSupport =  axios.create({
    baseURL: baseUrl,
});

export default apiSupport;
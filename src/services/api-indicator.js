  
import axios from 'axios'

const baseUrl = process.env.URL_INDICATOR;

console.log(baseUrl);


const apiIndicator =  axios.create({
    baseURL: baseUrl,
});

export default apiIndicator;
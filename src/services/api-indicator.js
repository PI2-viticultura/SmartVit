  
import axios from 'axios'

const baseUrl = process.env.URL_INDICATOR;

const apiIndicator =  axios.create({
    baseURL: baseUrl,
});

export default apiIndicator;
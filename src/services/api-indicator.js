  
import axios from 'axios'

const baseUrl = process.env.URL_INDICATOR;

const apiFeedback =  axios.create({
    baseURL: baseUrl,
});

export default apiIndicator;
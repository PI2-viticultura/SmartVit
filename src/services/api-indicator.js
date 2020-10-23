  
import axios from 'axios'

const baseUrl = process.env.REACT_APP_URL_INDICATOR;


const apiIndicator =  axios.create({
    baseURL: baseUrl,
});

export default apiIndicator;
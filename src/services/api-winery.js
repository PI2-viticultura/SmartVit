  
import axios from 'axios'

const baseUrl = process.env.REACT_APP_URL_WINERY;


const apiWinery =  axios.create({
    baseURL: baseUrl,
});

export default apiWinery;
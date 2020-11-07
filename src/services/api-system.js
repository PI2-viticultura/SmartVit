  
import axios from 'axios'

const baseUrl = process.env.REACT_APP_URL_SYSTEM;


const apiSystem =  axios.create({
    baseURL: baseUrl,
});

export default apiSystem;
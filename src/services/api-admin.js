  
import axios from 'axios'

const baseUrl = "http://localhost:8000/";


const apiAdmin=  axios.create({
    baseURL: baseUrl,
});

export default apiAdmin;
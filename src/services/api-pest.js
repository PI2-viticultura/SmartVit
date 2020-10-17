  
import axios from 'axios'

const baseUrl = process.env.URL_PEST;

console.log(baseUrl);


const apiPest =  axios.create({
    baseURL: baseUrl,
});

export default apiPest;
  
import axios from 'axios'

const baseUrl = process.env.REACT_APP_URL_PEST;

console.log(baseUrl);


const apiPest =  axios.create({
    baseURL: baseUrl,
});

export default apiPest;
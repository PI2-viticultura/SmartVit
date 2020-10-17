import axios from 'axios'
import dotenv from 'dotenv';

dotenv.config();
const baseUrl = process.env.URL_FEEDBACK

console.log(URL_FEEDBACK);
console.log(baseUrl);
console.log(process.env);

const apiFeedback =  axios.create({
    baseURL: baseUrl,
});

export default apiFeedback;
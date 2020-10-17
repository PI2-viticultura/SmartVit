  
import axios from 'axios'

const baseUrl = process.env.URL_FEEDBACK;


const apiFeedback =  axios.create({
    baseURL: baseUrl,
});

export default apiFeedback;
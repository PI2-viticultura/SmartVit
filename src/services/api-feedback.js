import axios from 'axios'


const baseUrl = process.env.URL_FEEDBACK

console.log(process.env);
console.log(baseUrl);

const apiFeedback =  axios.create({
    baseURL: baseUrl,
});

export default apiFeedback;
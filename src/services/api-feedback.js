import axios from 'axios'


const baseUrl = process.env.URL_FEEDBACK

console.log(URL_FEEDBACK);
console.log(baseUrl);
console.log(process.env);

const apiFeedback =  axios.create({
    baseURL: baseUrl,
});

export default apiFeedback;
import axios from 'axios'

const baseUrl = process.env.REACT_APP_URL_FEEDBACK


const apiFeedback =  axios.create({
    baseURL: baseUrl,
});

export default apiFeedback;
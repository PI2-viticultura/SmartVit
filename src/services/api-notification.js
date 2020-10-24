  
import axios from 'axios'

const baseUrl = process.env.REACT_APP_URL_NOTIFICATION;


const apiNotification =  axios.create({
    baseURL: baseUrl,
});

export default apiNotification;
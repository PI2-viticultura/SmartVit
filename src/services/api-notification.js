  
import axios from 'axios'

const baseUrl = process.env.REACT_APP_URL_NOTIFICATION;


const apiNotification =  axios.create({
    baseURL: 'https://smartvit-notification-dev.herokuapp.com/',
});

export default apiNotification;
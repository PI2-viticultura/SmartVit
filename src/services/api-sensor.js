  
import axios from 'axios'

const baseUrl = process.env.REACT_APP_URL_SENSOR;


const apiSensor =  axios.create({
    baseURL: baseUrl,
});

export default apiSensor;
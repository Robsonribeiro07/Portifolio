import axios from 'axios'


const APIURL = import.meta.env.VITE_API_URL_KEY


console.log(APIURL)
const api = axios.create({
    baseURL: APIURL
})


export default api;
import axios from 'axios'


const RenderApiURl = import.meta.env.VITE_API_URL_RENDER

const delay = import.meta.env.VITE_DELAY

const api = axios.create({
    baseURL: RenderApiURl
})

if(delay === "TRUE"){
    api.interceptors.response.use(
      response => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(response)
            }, (1000));
        })
      }
    )
}



export default api;
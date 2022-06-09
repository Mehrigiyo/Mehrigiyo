import axios from "axios";

const apiRoot = axios.create({
    baseURL: `http://207.154.244.140:8000/api/`
})

// apiRoot.interceptors.request.use((config) => {

// })


export default apiRoot
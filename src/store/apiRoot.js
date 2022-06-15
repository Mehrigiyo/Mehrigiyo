import axios from "axios";

const apiRoot = axios.create({
    baseURL: `http://207.154.244.140:8000/api/`
})

apiRoot.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");

    console.log(token, 'interceptors get token')
    if (config.url.includes("user/me")) {
        return config

    }
    if (config.headers !== undefined) {
        config.headers["Authorization"] = `Bearer ${token}`;
    }



    return config

})




apiRoot.interceptors.response.use(
    (config) => config,
    (response) => response,
    (error) => {
        console.log(error, "error");
        if (error.response.status === 401) {
            window.location.href = "/";
        }
    }
)



export default apiRoot